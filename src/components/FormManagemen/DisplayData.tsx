// components/DisplayData.tsx

import React from "react";

interface DisplayDataProps {
  foodName: string;
  category: string;
  transactionTime: string;
  expenseAmount: string;
}

const DisplayData: React.FC<DisplayDataProps> = ({
  foodName,
  category,
  transactionTime,
  expenseAmount,
}) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Data yang Disimpan</h2>
      <div>
        <strong>Nama Makanan:</strong> {foodName}
      </div>
      <div>
        <strong>Kategori:</strong> {category}
      </div>
      <div>
        <strong>Waktu Transaksi:</strong> {transactionTime}
      </div>
      <div>
        <strong>Jumlah Pengeluaran:</strong> {expenseAmount}
      </div>
    </div>
  );
};

export default DisplayData;
