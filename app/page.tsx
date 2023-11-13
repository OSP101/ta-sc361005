"use client"
import { useEffect, useState } from 'react';
import UserTable from '@/app/components/UserTable';
import { useRouter } from 'next/router'

// Fetch data directly in the component using `useEffect` and `useState`
export default function Users() {
  const [users, setUsers] = useState([]);


  const datalab = [
    {
        "createdAt": "2023-10-08T15:48:22.018Z",
        "name": "Lab 1",
        "image": "https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.6435-9/74701513_1209067865969558_4843289076142440448_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeGXTFDxoCuaalbrOdudfwVhA4GTiCD_9sgDgZOIIP_2yGilm0g-5vI5iJrMnoeeL32_0z4LE4N82VZIrF6DqCkZ&_nc_ohc=4IxDrQXywuoAX_66UsY&_nc_ht=scontent.fkkc4-1.fna&oh=00_AfC2B1N3mqIFmX-MrKxvljrfz-J0u-cgLrdRvRnLCynECg&oe=6578900B",
        "lastSeen": "2023-11-14T13:00:00.531Z",
        "email": "Course introduction",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/866.jpg",
        "id": "1"
        },
    {
        "createdAt": "2023-10-08T15:48:22.018Z",
        "name": "Lab 2",
        "image": "https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.6435-9/74701513_1209067865969558_4843289076142440448_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeGXTFDxoCuaalbrOdudfwVhA4GTiCD_9sgDgZOIIP_2yGilm0g-5vI5iJrMnoeeL32_0z4LE4N82VZIrF6DqCkZ&_nc_ohc=4IxDrQXywuoAX_66UsY&_nc_ht=scontent.fkkc4-1.fna&oh=00_AfC2B1N3mqIFmX-MrKxvljrfz-J0u-cgLrdRvRnLCynECg&oe=6578900B",
        "lastSeen": "2023-11-21T13:00:00.531Z",
        "email": "Multiplication division and complement of various base numbers",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/866.jpg",
        "id": "2"
    },
  ];

  return (
    <section className='py-24'>
      <div className='container'>
        <UserTable users={users.length ? users : datalab} />
      </div>
    </section>
  );
}
