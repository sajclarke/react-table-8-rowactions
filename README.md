# React Table 8 with Row Action Column (Edit & Delete)

This repo was set up as an example of using [Tanstack table v8](https://tanstack.com/table/v8) with row action column displaying Edit and Delete buttons

## Table Features

The example also includes the following features

- [x] Column filtering
- [x] Pagination
- [x] Fixed width column

## Row action Column

Row actions can be defined as a column type using the following code snippet. Note the use of 'id' instead of 'accessorKey'. This is essentially a display column as per [documentation](https://tanstack.com/table/v8/docs/guide/column-defs)

```
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
```
