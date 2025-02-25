import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";
import { useAddNewProductMutation, useUpdateProductMutation } from "../redux/services/productSlice";
import { useState } from "react";

export default function ProductForm() {
   
  const [addNewProduct, { isLoading, error }] = useAddNewProductMutation();
//   const [updateProduct, {isLoading:myLoading, error:myError}] = useUpdateProductMutation();
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    description: "",
    image: "",
    category: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
        const response = await addNewProduct(formData).unwrap();
        
        console.log(response)
    }catch(error){
        alert(error)
    }
  }

  return (
    <main className="flex justify-center">
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Title" />
          </div>
          <TextInput
            id="email1"
            type="text"
            name="title"
            placeholder="product title"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Price" />
          </div>
          <TextInput id="password1" type="number" name="price" required onChange={handleChange} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="des" value="Description" />
          </div>
          <Textarea id="des" required name="description" onChange={handleChange}/>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">
            This is me from Foundation 3nd please remember
          </Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </main>
  );
}
