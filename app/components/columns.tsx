import React from "react";
import { useRouter } from 'next/navigation';
import { User, Tooltip } from '@nextui-org/react';
import { DeleteIcon, EditIcon, EyeIcon } from '../components/icons';
import {Link} from "@nextui-org/react";

export type User = {
  id: string
  name: string
  email: string
  image: string
  lastSeen: string
}

export const columns = [
  {
    key: 'name',
    label: 'Laboratory'
  },
  {
    key: 'lastSeen',
    label: 'Date'
  },
  {
    key: 'actions',
    label: 'Actions'
  }
]

export const renderCell = (user: User, columnKey: React.Key) => {
  const cellValue = user[columnKey as keyof User]

  switch (columnKey) {
    case 'name':
      return (
        <User
          avatarProps={{ radius: 'lg', src: user.image }}
          description={user.email}
          name={cellValue}
        >
          {user.email}
        </User>
      )
    case 'lastSeen':
      return <span>{new Date(cellValue).toLocaleDateString()}</span>
    case 'actions':
      return (
        <div className='relative flex items-center gap-4'>
      <Link href={`/${user.id}`}>
        <Tooltip content='Details'>
          <span className='cursor-pointer text-lg text-default-400 active:opacity-50'>
            <EyeIcon />
          </span>
        </Tooltip>
      </Link>
          <Tooltip content='Edit'>
            <span className='cursor-pointer text-lg text-default-400 active:opacity-50'>
              <EditIcon />
            </span>
          </Tooltip>
          <Tooltip color='danger' content='Delete'>
            <span className='cursor-pointer text-lg text-danger active:opacity-50'>
              <DeleteIcon />
            </span>
          </Tooltip>
        </div>
      )
    default:
      return cellValue
  }
}