//Importing components
import AddToInventoryForm from "./components/AddToInventoryForm";

/////This component display a form to add a product
const AddToInventory: React.FC = () => {
  return (
    <div
      id="inventory__add-to-inventory"
      className="w-[95%] bg-white md:mt-[4rem] ml-[auto] mr-[auto] shadow-custom rounded-custom overflow-hidden">
      <h1 className="ml-[2rem] pt-[1rem] text-[2rem]">Add to inventory</h1>
      <hr className="m-[1.5rem] text-gray" />
      {/*Component that contains actual form*/}
      <AddToInventoryForm />
    </div>
  );
};

export default AddToInventory;
