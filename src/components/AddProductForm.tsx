


import { useForm } from "react-hook-form";
import { useState } from "react";
import { Star } from "lucide-react";

const AddProductForm = () => {
  const { register, handleSubmit } = useForm();
  const [rating, setRating] = useState(0);

  const onSubmit = (data: any) => {
    console.log({ ...data, rating });
    alert("Product Added! Check console for data.");
  };

  return (
    <div className="max-w-2xl mx-auto p-2">
      <h1 className="text-2xl font-bold text-center mb-2">Add New Product</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 bg-white p-2 rounded-2xl shadow"
      >
        <div>
          <label className="block font-medium mb-1 text-left">Name</label>
          <input
            {...register("name", { required: true })}
            placeholder="e.g., Smart Watch"
            className="w-full border rounded-lg p-2 focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-left">Price (₦)</label>
          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="e.g., 25,000"
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-left">Category</label>
          <select
            {...register("category", { required: true })}
            className="w-full border rounded-lg p-2"
          >
            <option>Accessories</option>
            <option>Fitness</option>
            <option>Clothing</option>
            <option>Electronics</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1 text-left">Quantity</label>
          <input
            type="number"
            {...register("quantity", { required: true })}
            placeholder="e.g., 10"
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-left">Rating (1-5)</label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={20}
                onClick={() => setRating(star)}
                className={`cursor-pointer transition-all ${
                  rating >= star ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}


export default AddProductForm
