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
        "name": "Lab 01",
        "image": "https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.6435-9/74701513_1209067865969558_4843289076142440448_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeGXTFDxoCuaalbrOdudfwVhA4GTiCD_9sgDgZOIIP_2yGilm0g-5vI5iJrMnoeeL32_0z4LE4N82VZIrF6DqCkZ&_nc_ohc=4IxDrQXywuoAX_66UsY&_nc_ht=scontent.fkkc4-1.fna&oh=00_AfC2B1N3mqIFmX-MrKxvljrfz-J0u-cgLrdRvRnLCynECg&oe=6578900B",
        "lastSeen": "2023-11-14T13:00:00.531Z",
        "email": "Course introduction",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/866.jpg",
        "id": "1"
        },
    {
        "createdAt": "2023-10-08T15:48:22.018Z",
        "name": "Lab 02",
        "image": "https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.6435-9/74701513_1209067865969558_4843289076142440448_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeGXTFDxoCuaalbrOdudfwVhA4GTiCD_9sgDgZOIIP_2yGilm0g-5vI5iJrMnoeeL32_0z4LE4N82VZIrF6DqCkZ&_nc_ohc=4IxDrQXywuoAX_66UsY&_nc_ht=scontent.fkkc4-1.fna&oh=00_AfC2B1N3mqIFmX-MrKxvljrfz-J0u-cgLrdRvRnLCynECg&oe=6578900B",
        "lastSeen": "2023-11-21T13:00:00.531Z",
        "email": "Multiplication division",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/866.jpg",
        "id": "2"
    },
    {
      "createdAt": "2023-10-08T15:48:22.018Z",
      "name": "Lab 03",
      "image": "https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.6435-9/74701513_1209067865969558_4843289076142440448_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeGXTFDxoCuaalbrOdudfwVhA4GTiCD_9sgDgZOIIP_2yGilm0g-5vI5iJrMnoeeL32_0z4LE4N82VZIrF6DqCkZ&_nc_ohc=4IxDrQXywuoAX_66UsY&_nc_ht=scontent.fkkc4-1.fna&oh=00_AfC2B1N3mqIFmX-MrKxvljrfz-J0u-cgLrdRvRnLCynECg&oe=6578900B",
      "lastSeen": "2023-11-28T13:00:00.531Z",
      "email": "Physical Representation",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/866.jpg",
      "id": "3"
  },
  {
    "createdAt": "2023-10-08T15:48:22.018Z",
    "name": "Lab 04",
    "image": "https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.6435-9/74701513_1209067865969558_4843289076142440448_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeGXTFDxoCuaalbrOdudfwVhA4GTiCD_9sgDgZOIIP_2yGilm0g-5vI5iJrMnoeeL32_0z4LE4N82VZIrF6DqCkZ&_nc_ohc=4IxDrQXywuoAX_66UsY&_nc_ht=scontent.fkkc4-1.fna&oh=00_AfC2B1N3mqIFmX-MrKxvljrfz-J0u-cgLrdRvRnLCynECg&oe=6578900B",
    "lastSeen": "2023-12-05T13:00:00.531Z",
    "email": "Physical Representation",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/866.jpg",
    "id": "4"
},
{
  "createdAt": "2023-10-08T15:48:22.018Z",
  "name": "Lab 05",
  "image": "https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.6435-9/74701513_1209067865969558_4843289076142440448_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeGXTFDxoCuaalbrOdudfwVhA4GTiCD_9sgDgZOIIP_2yGilm0g-5vI5iJrMnoeeL32_0z4LE4N82VZIrF6DqCkZ&_nc_ohc=4IxDrQXywuoAX_66UsY&_nc_ht=scontent.fkkc4-1.fna&oh=00_AfC2B1N3mqIFmX-MrKxvljrfz-J0u-cgLrdRvRnLCynECg&oe=6578900B",
  "lastSeen": "2023-12-12T13:00:00.531Z",
  "email": "Physical Representation",
  "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/866.jpg",
  "id": "5"
},
{
  "createdAt": "2023-10-08T15:48:22.018Z",
  "name": "Lab 06",
  "image": "https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.6435-9/74701513_1209067865969558_4843289076142440448_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeGXTFDxoCuaalbrOdudfwVhA4GTiCD_9sgDgZOIIP_2yGilm0g-5vI5iJrMnoeeL32_0z4LE4N82VZIrF6DqCkZ&_nc_ohc=4IxDrQXywuoAX_66UsY&_nc_ht=scontent.fkkc4-1.fna&oh=00_AfC2B1N3mqIFmX-MrKxvljrfz-J0u-cgLrdRvRnLCynECg&oe=6578900B",
  "lastSeen": "2023-12-19T13:00:00.531Z",
  "email": "Computer Systems",
  "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/866.jpg",
  "id": "6"
},
{
  "createdAt": "2023-10-08T15:48:22.018Z",
  "name": "Lab 07",
  "image": "https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.6435-9/74493148_1210871969122481_6538432412114747392_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeGbQVBaHb6t8fJzewS8It04lTWDKk8jITeVNYMqTyMhN-sAxSfQTdgINqrhme9GFLntdImNwaxHd45vxs8rwwfL&_nc_ohc=TqxrzijxrKoAX_GJHas&_nc_ht=scontent.fbkk13-1.fna&oh=00_AfBqO33K2tNP1pVhIjlMKOeqJ7ug-zNPjClgq7qu4OyaRQ&oe=657BE328",
  "lastSeen": "2023-12-26T13:00:00.531Z",
  "email": "MARIE",
  "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/866.jpg",
  "id": "7"
},
{
  "createdAt": "2023-10-08T15:48:22.018Z",
  "name": "Lab 08",
  "image": "https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.18169-9/14265047_680631135422469_7665728326407634767_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeHRrJT7pXjuaL_IT3RedPJTiOZYyz37GcmI5ljLPfsZyZC5keoMFw1dMbUv6NL1EhPXng89ZX-eVCMOIlH2s2bO&_nc_ohc=ACuzxS2j0WMAX9Lv5sf&_nc_ht=scontent.fbkk12-3.fna&oh=00_AfDokY2ye7enV1EeoSwmIxG4cryHrI1ui7AkD7_AYF-51Q&oe=657BDE40",
  "lastSeen": "2024-01-02T13:00:00.531Z",
  "email": "MARIE IF ELSE",
  "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/866.jpg",
  "id": "8"
},
{
  "createdAt": "2023-10-08T15:48:22.018Z",
  "name": "Lab 09",
  "image": "https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.18169-9/12985412_486757618200590_3543366533866928255_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeHm7vug0viZOFpmLB3U0i-1TP4eRAeJOltM_h5EB4k6W6DBF4Zl3v7QOCMIwCeMnNRLOgzMl1ctLaExzulsqSOj&_nc_ohc=ZMb1T5L3XSUAX-rYPsl&_nc_ht=scontent.fbkk13-2.fna&oh=00_AfAbyjOY7BFlRpgboh17t-jw7ncJVvtaaSg7fmUYXnXiSg&oe=657BF15A",
  "lastSeen": "2024-01-23T13:00:00.531Z",
  "email": "MARIE LOOP",
  "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/866.jpg",
  "id": "9"
},
{
  "createdAt": "2023-10-08T15:48:22.018Z",
  "name": "Lab 10",
  "image": "https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.6435-9/156832934_2900905063503920_4502807124182498561_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeF0awEoVdaRlWxCoA_tU33DCLzpB4XWZj4IvOkHhdZmPgR5cZIZzkmb2SBCfBleXzrSNdE_VK0TQkiYXheyInHw&_nc_ohc=b9yVFcCv3woAX-GCnUJ&_nc_ht=scontent.fbkk13-1.fna&oh=00_AfBDvMQ14_NNYzlWugltULnSpptSNEAbgaJR-BrdPOj5aQ&oe=657BCB48",
  "lastSeen": "2024-01-30T13:00:00.531Z",
  "email": "MARIE Subroutine",
  "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/866.jpg",
  "id": "10"
},
{
  "createdAt": "2023-10-08T15:48:22.018Z",
  "name": "Lab 11",
  "image": "https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.6435-9/159099510_1617654771777530_2795142447290646878_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeFVf-vr5kijogYXMW_qvo_cn0TZuA4A1dSfRNm4DgDV1Pqt5_xt7xpNoZkL58LIWPvEeac6M4kQXQpAnaxoshIR&_nc_ohc=LmCTXrdfr9sAX_WqQUD&_nc_ht=scontent.fbkk12-2.fna&oh=00_AfC4Gq1-tIUSBZots80iBJArqp44fo2n_ptacJ7tIQ4HFQ&oe=657BD0EB",
  "lastSeen": "2024-02-06T13:00:00.531Z",
  "email": "MARIE AssemblerProcesses",
  "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/866.jpg",
  "id": "11"
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
