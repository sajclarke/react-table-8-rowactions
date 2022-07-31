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
    id: "action",
    header: "Action",
    size: 100,
    maxSize: 100,
    cell: ({ row }: any) => {
    const { firstName } = row.original;
    return (
        <div>
        <button
            onClick={() => {
            console.log("edit", firstName);
            }}
        >
            <HiOutlinePencilAlt />
        </button>
        <button
            onClick={() => {
            console.log("delete", firstName);
            }}
        >
            <HiOutlineTrash />
        </button>
        </div>
    );
    },
},
```
