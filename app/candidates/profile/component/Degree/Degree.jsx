"use client"
import {React,useState }from 'react'
import DegreeItem from './DegreeItem';
import Certification from './Certification';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NewCertAction, NewDegreeAction } from '@/app/action/EditAction';
const Degree = (props) => {
    const [degree, setDegree] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [institution, setInstitution] = useState("");
    const [isCreating, setIsCreating] = useState(false);
    const [education, setEducation] = useState(true);
    const handleCreate = async () => {
        if (!degree || !institution || !startDate || !endDate) {
          alert("Please fill in all required fields.");
          return;
        }
    
        setIsCreating(true);
        try{
            const data ={
                degree: degree,
                description: description,
                end_date: endDate,
                institution: institution,
                start_date: startDate
            }
        const response = await NewDegreeAction(data) 
        window.location.reload();
        console.log(response);
    }
        finally{
        setIsCreating(false);
        resetFields();
        }
    };
    const resetFields = () => {
        setDegree("");
        setDescription("");
        setStartDate("");
        setEndDate("");
        setInstitution("");
    };


      const [certificationName, setCertificationName] = useState("");
      const [issueDate, setIssueDate] = useState("");
      const [expirationDate, setExpirationDate] = useState("");
      const [issuedBy, setIssuedBy] = useState("");
      const [isCreatingCert, setIsCreatingCert] = useState(false);
    
      const handleCreateCert = async () => {
        if (!certificationName || !issueDate || !issuedBy) {
          alert("Please fill in all required fields.");
          return;
        }
    
        setIsCreating(true);
        try{
          const  data={
                certification_name: certificationName,
                issue_date: issueDate,
                expiration_date: expirationDate,
                issued_by: issuedBy
            }
            const response = await NewCertAction(data) 
            window.location.reload();
            console.log(response);
        }finally{
        setIsCreating(false);
        resetFieldsCert();}
      };
    
      const resetFieldsCert = () => {
        setCertificationName("");
        setIssueDate("");
        setExpirationDate("");
        setIssuedBy("");
      };

  return (
        <div className='w-full flex flex-col justify-normal items-start gap-10 px-10 py-6 bg-white rounded-2xl'>
            <h1 className='text-3xl font-light '>Education</h1>
            <div className='flex flex-row w-[40%] justify-center gap-4 items-start text-lg'>
                <button className={`font-light p-4  ${education ? 'border-b border-black' : 'text-[#888888]'} `} onClick={() => setEducation(true)}>
                            <p className="text-2xl">Degree</p>  
                </button>
                <button className={`font-light p-4  ${!education ? 'border-b border-black' : 'text-[#888888]'} `} onClick={() => setEducation(false)}>
                            <p className="text-2xl">Certification & Cv</p>  
                </button>
            </div>
            {education && props.education.total !== 0 && (
            props.education.educations.map((item)=>{
                    return(
                        <DegreeItem key={item.education_id} education_id={item.education_id} degree={item.degree} description={item.description}  end_date={item.end_date} institution={item.institution} start_date={item.start_date} />
                    )
                })
            )} 
                <div className="flex flex-row w-full  justify-start gap-4 items-center">
                  {!education && props.certifications.total !== 0 && (
                      props.certifications.certifications.map((item)=>{
                          return(
                        
                            <Certification data={item}  key= {item.certification_id}/>
                        
                      )
                      }))}
                 </div>
          
            <div className="w-full items-center justify-end">
               {education &&  (
                   <Dialog>
                   <DialogTrigger asChild>
                     <Button variant="profile">Add New Degree</Button>
                   </DialogTrigger>
             
                   <DialogContent>
                     <DialogHeader>
                       <DialogTitle>Add New Degree</DialogTitle>
                     </DialogHeader>
             
                     <div className="flex flex-col gap-4">
                       <div>
                         <label htmlFor="degree" className="block text-lg font-medium">Degree</label>
                         <Input
                           id="degree"
                           value={degree}
                           onChange={(e) => setDegree(e.target.value)}
                           placeholder="Degree"
                         />
                       </div>
             
                       <div>
                         <label htmlFor="description" className="block text-lg font-medium">Description</label>
                         <Input
                           id="description"
                           value={description}
                           onChange={(e) => setDescription(e.target.value)}
                           placeholder="Description (Optional)"
                         />
                       </div>
             
                       <div>
                         <label htmlFor="startDate" className="block text-lg font-medium">Start Date</label>
                         <Input
                           id="startDate"
                           value={startDate}
                           onChange={(e) => setStartDate(e.target.value)}
                           placeholder="Start Date"
                         />
                       </div>
             
                       <div>
                         <label htmlFor="endDate" className="block text-lg font-medium">End Date</label>
                         <Input
                           id="endDate"
                           value={endDate}
                           onChange={(e) => setEndDate(e.target.value)}
                           placeholder="End Date"
                         />
                       </div>
             
                       <div>
                         <label htmlFor="institution" className="block text-lg font-medium">Institution</label>
                         <Input
                           id="institution"
                           value={institution}
                           onChange={(e) => setInstitution(e.target.value)}
                           placeholder="Institution"
                         />
                       </div>
                     </div>
             
                     <DialogFooter>
                       <Button onClick={handleCreate} disabled={isCreating}>
                         {isCreating ? "Creating..." : "Create"}
                       </Button>
                     </DialogFooter>
                   </DialogContent>
                 </Dialog>
               )}
               {!education && (
                    <Dialog>
                        <DialogTrigger asChild>
                        <Button variant="profile">Add New Certification</Button>
                        </DialogTrigger>

                        <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add New Certification</DialogTitle>
                        </DialogHeader>

                        <div className="flex flex-col gap-4">
                            <div>
                            <label htmlFor="certificationName" className="block text-lg font-medium">Certification Name</label>
                            <Input
                                id="certificationName"
                                value={certificationName}
                                onChange={(e) => setCertificationName(e.target.value)}
                                placeholder="Certification Name"
                            />
                            </div>

                            <div>
                            <label htmlFor="issueDate" className="block text-lg font-medium">Issue Date</label>
                            <Input
                                id="issueDate"
                                value={issueDate}
                                onChange={(e) => setIssueDate(e.target.value)}
                                placeholder="Issue Date"
                            />
                            </div>

                            <div>
                            <label htmlFor="expirationDate" className="block text-lg font-medium">Expiration Date</label>
                            <Input
                                id="expirationDate"
                                value={expirationDate}
                                onChange={(e) => setExpirationDate(e.target.value)}
                                placeholder="Expiration Date (Optional)"
                            />
                            </div>

                            <div>
                            <label htmlFor="issuedBy" className="block text-lg font-medium">Issued By</label>
                            <Input
                                id="issuedBy"
                                value={issuedBy}
                                onChange={(e) => setIssuedBy(e.target.value)}
                                placeholder="Issued By"
                            />
                            </div>
                        </div>

                        <DialogFooter>
                            <Button onClick={handleCreateCert} disabled={isCreatingCert}>
                            {isCreatingCert ? "Creating..." : "Create"}
                            </Button>
                        </DialogFooter>
                        </DialogContent>
                    </Dialog>)}
            </div>
        </div>     
  )
}

export default Degree