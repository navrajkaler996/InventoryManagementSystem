//Importing utilities

import { SubDepartmentType } from "../../utils/types";
import { useGetByDepartmentCodeQuery } from "../../../../services/department";
import { useGetSubDepartmentsByDepartmentCodeQuery } from "../../../../services/subdepartment";
import { createCurrentDepartment } from "../../utils/dashboardUtils";
import { activeDepartment } from "../../../../features/departmentSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import DepartmentDropdown from "./components/DepartmentDropdown";
import DepartmentDetails from "./components/DepartmentDetails";

const Department: React.FC = ({}) => {
  const dispatch = useDispatch();

  //Extracting the current active department from the store
  const currentDepartment = useSelector(
    (state: any) => state?.activeDepartment
  );

  //Executing hook to fetch a single department using department_code
  const {
    data: departmentData,
    error: departmentError,
    isLoading: departmentIsLoading,
  } = useGetByDepartmentCodeQuery("DEP001");

  //Executing hook to fetch a single subdepartment using department_code
  const {
    data: subDepartmentsData,
    error: subDepartmentsError,
    isLoading: subDepartmentIsLoading,
  } = useGetSubDepartmentsByDepartmentCodeQuery("DEP001");

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
      <DepartmentDetails
        departmentData={departmentData}
        currentDepartment={currentDepartment}
        departmentIsLoading={departmentIsLoading}
      />

      <DepartmentDropdown
        departmentData={departmentData}
        subDepartmentsData={subDepartmentsData}
        subDepartmentIsLoading={subDepartmentIsLoading}
        subDepartmentChangeHandler={subDepartmentChangeHandler}
      />
    </div>
  );
};

export default Department;