import * as React from "react";
import Table from "./components/Table";
import Modal from "./components/Modal";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
import { makeData, Person } from "./utils/makeData";
import { ColumnDef } from "@tanstack/react-table";

export default function App() {
  const [data] = React.useState(() => makeData(100000));
  let [isModalOpen, setIsModalOpen] = React.useState(false);

  const columns: ColumnDef<Person>[] = [
    {
      accessorKey: "firstName",
      cell: (info) => info.getValue(),
      header: "First Name",
    },
    {
      accessorFn: (row) => row.lastName,
      id: "lastName",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Last Name</span>,
    },
    {
      accessorKey: "age",
      header: () => "Age",
    },
    {
      accessorKey: "visits",
      header: () => <span>Visits</span>,
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "progress",
      header: "Profile Progress",
    },
    {
      id: "actions",
      header: "Actions",
      size: 100,
      maxSize: 100,
      cell: ({ row }: any) => {
        const { firstName, lastName } = row.original;

        const onEdit = () => {
          console.log("click to edit", { firstName, lastName });
          setIsModalOpen(!isModalOpen);
        };

        const onDelete = () => {
          console.log("click to delete", { firstName, lastName });
        };
        return (
          <div className="flex flex-wrap gap-1">
            <button
              type="button"
              onClick={onEdit}
              className="flex items-center px-4 py-1 bg-blue-500 hover:bg-blue-700 text-white"
            >
              <HiOutlinePencilAlt className="w-4 h-4" />
              Edit
            </button>
            <button
              type="button"
              onClick={onDelete}
              className="flex items-center px-4 py-1 bg-red-500 hover:bg-red-700 text-white"
            >
              <HiOutlineTrash className="w-4 h-4" />
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="grid place-content-center mt-10 w-full">
      <Table columns={columns} data={data} />
      {isModalOpen && (
        <Modal
          modalTitle="Modal"
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(!isModalOpen)}
        >
          Modal content goes here ....
        </Modal>
      )}
    </div>
  );
}
