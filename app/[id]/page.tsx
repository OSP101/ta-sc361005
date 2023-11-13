"use client"
import { useEffect, useState } from 'react';
import React from 'react';
import { useRouter } from 'next/router';
import { Input, RadioGroup, Radio, Button, Breadcrumbs, BreadcrumbItem, Card, CardBody, CardHeader, Divider,Tabs, Tab,Skeleton } from "@nextui-org/react";
import axios from 'axios';

export default function Index({ params }: { params: { id: string } }) {
  const [stdid, setStdid] = useState('');
  const [score, setScore] = useState('1');
  const [lab, setLabid] = useState(params.id);
  const [dataToSubmit, setDataToSubmit] = useState([]);


  const [data, setData] = useState([]);


  const [isLoaded, setIsLoaded] = React.useState(false);

  const [load , setLoad] = useState(false);
  const toggleLoad = () => {
    setLoad(true);
  };

  useEffect(() => {
    setIsLoaded(false); // Set loading state before fetching data
    getData();
  }, []);
  
  const getData = () =>{
    axios.get('https://sheet.best/api/sheets/c25a43ff-8e51-4050-b0c8-0c2a3e3a6690')
      .then(res => {
        setData(res.data);
        setIsLoaded(true); // Set loading state after fetching data
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setIsLoaded(true); // Set loading state after an error
      });
  }
  

  if(!data){
    return <div/>
  }

  const submitData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const currentDate = new Date();
    setLoad(true)
    const scoreData = {
      currentDate,
      lab,
      stdid,
      score
    };

    
  
  // ตรวจสอบว่าข้อมูลที่จะ submit อยู่ใน data หรือไม่
  const isDataExist = data?.some((item: { lab: string; stdid: string }) => {
    if (item) {
      return item.lab === lab && item.stdid === stdid;
    }
  
    return false;
  });
  
  
    // ถ้าข้อมูลอยู่ใน data ให้แสดง Alert
    if (isDataExist) {
      window.alert('ข้อมูลมีอยู่แล้ว');
    }
    else if(stdid == "" && lab == ""){
      window.alert('กรอกข้อมูลไม่ครบ');
    }
    
    else {
      axios.post('https://sheet.best/api/sheets/c25a43ff-8e51-4050-b0c8-0c2a3e3a6690', scoreData)
        .then(res => {
          console.log(res);
          setScore('1');
          setStdid('');
          getData()
          setLoad(false);
        })
        .catch(err => {
          console.error(err);
        });
    }

  }


  const editData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoad(true)
  
    // ตรวจสอบว่าข้อมูลอยู่ใน data หรือไม่
    const isDataExist = data?.some((item: { lab: string; stdid: string }) => {
        if (item) {
          return item.lab === lab && item.stdid === stdid;
        }
      
        return false;
      });
      
  
    // ถ้าข้อมูลไม่อยู่ใน data ให้แสดง Alert
    if (isDataExist) {
      const upscoreData = {
        score
      };
  
      if (stdid === "" || lab === "") {
        window.alert('กรอกข้อมูลไม่ครบ');
      } else {
console.log(stdid,lab,upscoreData)

        axios.patch(`https://sheet.best/api/sheets/c25a43ff-8e51-4050-b0c8-0c2a3e3a6690/search?stdid=${stdid}&lab=${lab}`, upscoreData)
          .then(res => {
            console.log(res);
            setScore('1');
            setStdid('');
            setLoad(false);
          })
          .catch(err => {
            console.error(err);
          });
      }
    } else {
      window.alert('ไม่มีข้อมูลที่ต้องการแก้ไข');
    }
  };
  

  return (
    <div className='container'>
      <Breadcrumbs>
        <BreadcrumbItem href='/'>Home</BreadcrumbItem>
        <BreadcrumbItem>Laboratory: {params.id}</BreadcrumbItem>
      </Breadcrumbs> <br />
      <Divider />
      <Tabs aria-label="Options" color='secondary' variant='bordered' className='mt-4 mb-4 flex justify-center' disabledKeys={["videos"]}>
        <Tab key="photos" title="เพิ่มคะแนน" className='flex justify-center'>
          <Card className="p-4 w-1/2 flex justify-center">
            <Skeleton isLoaded={isLoaded}>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h1 className="font-bold text-2xl">เพิ่มคะแนน</h1>
                <p className="text-small text-default-500">Laboratory: {params.id}</p>
              </CardHeader>
              <br /><Divider /><br />
              <form onSubmit={submitData}>
                <CardBody>
                  <Input
                    isRequired
                    type="text"
                    label="StudentID"
                    className="max-w-xs"
                    name={stdid}
                    value={stdid}
                    onChange={(e) => setStdid(e.target.value)}
                  />
                  <br />
                  <RadioGroup
                    label="Score"
                    orientation="horizontal"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                  >
                    <Radio value="1">1</Radio>
                    <Radio value="0.75">0.75</Radio>
                    <Radio value="0.5">0.5</Radio>
                    <Radio value="0.25">0.25</Radio>
                    <Radio value="0">0</Radio>
                  </RadioGroup>
                  <br /><br />
                  <Button
  color="success"
  variant="ghost"
  className='max-w-xs'
  type='submit'
  // onClick={toggleLoad}
  disabled={load}
  isLoading={load}
>
  {load ? "Loading..." : "Save"}
</Button>

                </CardBody>
              </form>
            </Skeleton>
          </Card>
        </Tab>
        <Tab key="music" title="แก้ไขคะแนน" className='flex justify-center'>
          <Card className="p-4 w-1/2 flex justify-center">
            <Skeleton isLoaded={isLoaded}>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h1 className="font-bold text-2xl">แก้ไขคะแนน</h1>
                <p className="text-small text-default-500">Laboratory: {params.id}</p>
              </CardHeader>
              <br /><Divider /><br />
              <form onSubmit={editData}>
                <CardBody>
                  <Input
                    isRequired
                    type="text"
                    label="StudentID"
                    className="max-w-xs"
                    name={stdid}
                    value={stdid}
                    onChange={(e) => setStdid(e.target.value)}
                  />
                  <br />
                  <RadioGroup
                    label="Score"
                    orientation="horizontal"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                  >
                    <Radio value="1">1</Radio>
                    <Radio value="0.75">0.75</Radio>
                    <Radio value="0.5">0.5</Radio>
                    <Radio value="0.25">0.25</Radio>
                    <Radio value="0">0</Radio>
                  </RadioGroup>
                  <br /><br />
                  <Button
  color="warning"
  variant="ghost"
  className='max-w-xs'
  type='submit'
  // onClick={toggleLoad}
  disabled={load}
  isLoading={load}
>
  {load ? "Loading..." : "Edit"}
</Button>


                </CardBody>
              </form>
            </Skeleton>
          </Card>
        </Tab>
        <Tab key="videos" title="ลบคะแนน">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>  
  );
  
}
