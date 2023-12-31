import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Importing hooks
import useDepartment from "../../../../hooks/useDepartment";

//Importing features
import { activeDepartment } from "../../../../features/departmentSlice";

//Importing services
import { useGetSubDepartmentsByDepartmentCodeQuery } from "../../../../services/subdepartment";

//Importing utilities
import { SubDepartmentType } from "../../utils/types";
import { createCurrentDepartment } from "../../utils/dashboardUtils";
import { UserState } from "../../../../features/featureUtils/featureTypes";

//Importing components
import DepartmentDropdown from "./components/DepartmentDropdown";
import DepartmentDetails from "./components/DepartmentDetails";

const createType = (code: string | undefined) => {
  if (!code) return "";

  if (code?.startsWith("DEP")) return "GET_DEPARTMENT";
  else if (code?.startsWith("STORE")) return "GET_STORE";
  else return "GET_SUB_DEPARTMENT";
};

/////RENDERS A FUNCTIONAL COMPONENT
//Department component renders description of the department,
//and a dropdown to switch departments
const Department: React.FC = ({}) => {
  const dispatch = useDispatch();

  //Extracting the current active department from the store
  const currentDepartment = useSelector(
    (state: any) => state?.activeDepartment
  );

  const userData: UserState = useSelector((state: any) => state?.loggedInUser);
  const { employee_department_code: employeeDepartmentCode } = userData;

  //Executing hook to fetch a single department using department_code
  const { departmentData, departmentError, departmentIsLoading } =
    useDepartment(employeeDepartmentCode, {
      type: createType(employeeDepartmentCode),
    });

  //Executing hook to fetch a single subdepartment using department_code
  const {
    data: subDepartmentsData,
    error: _subDepartmentsError,
    isLoading: subDepartmentIsLoading,
  } = useGetSubDepartmentsByDepartmentCodeQuery(employeeDepartmentCode);

  useEffect(() => {
    //When department data is fetched from the API, the data is dispatched to the store.
    if (departmentData) {
      //Before dispatching the data, it is transformed into proper form so that there are no conflicts
      /////when a subdepartment is selected from the dropdown.
      /////createCurrentDepartment function is used.
      const currentDepartment = createCurrentDepartment(departmentData);
      dispatch(activeDepartment(currentDepartment));
    }
  }, [departmentData]);

  //This change handler is passed to the Department component.
  /////It will be invoke when a subdepartment is selected from the dropdown.
  const subDepartmentChangeHandler = (subDepartmentCode: String) => {
    let currentDepartment = subDepartmentsData.find(
      (subDepartment: SubDepartmentType) =>
        subDepartment.sub_department_code === subDepartmentCode
    );

    //If selected department is a parent department.
    if (!currentDepartment) {
      currentDepartment = departmentData;
    }
    //Again, the createCurrentDepartment function is used to transform the data into proper form,
    /////in order to avoid conflicts.
    currentDepartment = createCurrentDepartment(currentDepartment);

    dispatch(activeDepartment(currentDepartment));
  };

  return (
    <div
      id="dashboard__department"
      className="flex flex-col lg:flex-row md:flex-row lg:justify-between md:justify-between items-center mt-[3rem]">
      {/*
        Component to display the department details
      */}
      <DepartmentDetails
        departmentData={departmentData}
        currentDepartment={currentDepartment}
        departmentIsLoading={departmentIsLoading}
      />
      {/*
        Component that displays a dropdown
      */}
      {subDepartmentsData?.length > 0 && (
        <DepartmentDropdown
          departmentData={departmentData}
          subDepartmentsData={subDepartmentsData}
          subDepartmentIsLoading={subDepartmentIsLoading}
          subDepartmentChangeHandler={subDepartmentChangeHandler}
        />
      )}
    </div>
  );
};

export default Department;
