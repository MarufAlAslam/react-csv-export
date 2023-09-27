import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Papa from "papaparse";

const CSV = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://serenity-well-server.vercel.app/api/v1/freelanceTherapists")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const dataSource = data.map((item) => {
    return {
      key: item._id,
      fullName: item.applicantInfo.fullName,
      date: item.applicantInfo.date,
      address: item.applicantInfo.address,
      cell: item.applicantInfo.cell,
      available: item.applicantInfo.availableDate,
      crime: item.crime,
      authorized: item.authorized,
    };
  });

  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Cell",
      dataIndex: "cell",
      key: "cell",
    },
    {
      title: "Available",
      dataIndex: "available",
      key: "available",
    },
    {
      title: "Crime",
      dataIndex: "crime",
      key: "crime",
    },
    {
      title: "Authorized",
      dataIndex: "authorized",
      key: "authorized",
    },
  ];

  //   console.log(data);

  const exportData = (data, fileName, type) => {
    // Create a link and download the file
    const blob = new Blob([data], { type });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const csvData = data.map((item) => {
    return {
      key: item._id,
      fullName: item.applicantInfo.fullName,
      date: item.applicantInfo.date,
      address: item.applicantInfo.address,
      email: item.applicantInfo.email,
      cell: item.applicantInfo.cell,
      available: item.applicantInfo.availableDate,
      rsaPassport: item.applicantInfo.rsaPassport,
      suburb: item.applicantInfo.suburb,
      reference1: item.reference.reference1.refName1,
      refPhone1: item.reference.reference1.refPhone1,
      reference2: item.reference.reference2.refName2,
      refPhone2: item.reference.reference2.refPhone2,
      reference3: item.reference.reference3.refName3,
      refPhone3: item.reference.reference3.refPhone3,
      crime: item.crime,
      authorized: item.authorized,
    };
  });

  const handleCSV = () => {
    const csv = Papa.unparse(csvData);

    exportData(csv, "data.csv", "text/csv;charset=utf-8;");
  };

  return (
    <div className="py-10">
      <div className="container text-right py-5">
        <Link to="/">
          <button className="border-0 btn btn-primary me-3">Back</button>
        </Link>
        <button onClick={handleCSV} className="csv border-0 btn btn-success">
          Export CSV
        </button>
      </div>

      <div className="container">
        <Table dataSource={dataSource} columns={columns} />;
      </div>
    </div>
  );
};

export default CSV;
