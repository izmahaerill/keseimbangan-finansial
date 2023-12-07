// components/Form.tsx

import React from "react";

interface FormProps {
  formData: {
    number: string;
    foodName: string;
    category: string;
    transactionTime: string;
    expenseAmount: string;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit?: (e: React.FormEvent) => void;
  readOnly?: boolean | undefined; // Perbarui definisi readOnly di sini
}

const categories = ["Kebutuhan Dasar", "Kebutuhan Sekunder", "Tersier"];

const Form: React.FC<FormProps> = ({
  formData,
  handleChange,
  handleSubmit,
  readOnly,
}) => {
  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <div className="flex items-center">
        <label htmlFor="number" className="w-24">
          Nomor:
        </label>
        <input
          type="text"
          id="number"
          value={formData.number}
          onChange={handleChange}
          readOnly={readOnly}
          className="p-2 border border-gray-300 rounded-md flex-grow"
        />
      </div>
      {/* ... (Elemen formulir lainnya) */}
      {!readOnly && (
        <div className="flex items-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Simpan
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;
