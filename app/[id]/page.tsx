"use client"
import { useEffect, useState } from 'react';
import React from 'react';
import { useRouter } from 'next/router';
import { Input, RadioGroup, Radio, Button, Breadcrumbs, BreadcrumbItem, Card, CardBody, CardHeader, Divider, Tabs, Tab, Skeleton,   Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  useDisclosure} from "@nextui-org/react";
import axios from 'axios';
import {Link} from "@nextui-org/react";
import Alert from "../components/alert";


export default function Index({ params }: { params: { id: string } }) {
  const [stdid, setStdid] = useState('');
  const [score, setScore] = useState('1');
  const [lab, setLabid] = useState(params.id);
  const [dataToSubmit, setDataToSubmit] = useState([]);
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [load, setLoad] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {isOpen, onOpen, onOpenChange} = useDisclosure();


  const toggleLoad = () => {
    setLoad(true);
  };


  useEffect(() => {
    setIsLoaded(false); // Set loading state before fetching data
    getData();
  }, []);

  const getData = () => {
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


  if (!data) {
    return <div />
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
      setLoad(false);
      window.alert('ข้อมูลมีอยู่แล้ว');
      
    }
    else if (stdid == "" && lab == "") {
      
      setLoad(false);
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
    onOpen();
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
      setLoad(false);
      const upscoreData = {
        score
      };

      if (stdid === "" || lab === "") {
                setLoad(false);
                window.alert('กรอกข้อมูลไม่ครบ');

      } else {
        console.log(stdid, lab, upscoreData)

        axios.patch(`https://sheet.best/api/sheets/c25a43ff-8e51-4050-b0c8-0c2a3e3a6690/search?stdid=${stdid}&lab=${lab}`, upscoreData)
          .then(res => {
            console.log(res);
            setScore('1');
            setStdid('');
    onOpen();
    setLoad(false);
          })
          .catch(err => {
            console.error(err);
          });
      }
    } else {
      setLoad(false);
      window.alert('ไม่มีข้อมูลที่ต้องการแก้ไข');

    }
  };


  const modal = () => {

  }


  return (
    <div className='container'>
      <Breadcrumbs>
        <BreadcrumbItem href='/'>Home</BreadcrumbItem>
        <BreadcrumbItem>Laboratory: {params.id}</BreadcrumbItem>
      </Breadcrumbs> <br />
      <Divider />

      <div className="flex w-full justify-center">
      <Card className="p-4 flex justify-center mt-7">
        <CardBody className="overflow-hidden">
      <Tabs aria-label="Options" color='secondary' variant='bordered' fullWidth size="lg" className='' disabledKeys={["videos"]}>
        <Tab key="photos" title="เพิ่มคะแนน">
          <br />
            <Skeleton isLoaded={isLoaded}>
                <h1 className="font-bold text-2xl">เพิ่มคะแนน</h1>
                <p className="text-small text-default-500">Laboratory: {params.id}</p>
            </Skeleton>
            <br /><Divider /><br />
            <form onSubmit={submitData}>
                <Skeleton isLoaded={isLoaded}>
                  <Input
                    isRequired
                    type="text"
                    label="StudentID"
                    className="max-w-xs"
                    name={stdid}
                    value={stdid}
                    onChange={(e) => setStdid(e.target.value)}
                  />
                </Skeleton>
                <br />
                <Skeleton isLoaded={isLoaded}>
                  <RadioGroup
                    label="Score"
                    color='secondary'
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
                </Skeleton>
                <br /><br />
                <div>
                <Skeleton isLoaded={isLoaded}>
                  <Button
                  fullWidth
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
                  {isSuccess && <Alert />}
                </Skeleton>
                </div>
            </form>
        </Tab>
        <Tab key="music" title="แก้ไขคะแนน">
            <Skeleton isLoaded={isLoaded}>
              <br />
                <h1 className="font-bold text-2xl">แก้ไขคะแนน</h1>
                <p className="text-small text-default-500">Laboratory: {params.id}</p>
              <br /><Divider /><br />
              <form onSubmit={editData}>
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
                  fullWidth
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
              </form>
            </Skeleton>
        </Tab>
        <Tab key="videos" title="ลบคะแนน">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
      </CardBody>
      </Card>
    </div>
    <p className="text-small text-default-500 text-center mt-4">Copyright © 2023 <Link isExternal showAnchorIcon href='https://www.facebook.com/groups/sc361005' >SC361005</Link></p>

      <Modal isOpen={isOpen} backdrop='blur' onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Success!!</ModalHeader>
              <ModalBody>
                  <p>{ }</p>
              </ModalBody>
              <ModalFooter>
                <Button color="success" variant="ghost" onPress={onClose} fullWidth>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    
    
    
    
    
    </div>
  );

}
