import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DialogDemo(props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={props.name}>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle><span className="text-[#4D4D]">Edit profile</span></DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        {props.data.map((item)=>{
            return(
            <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor={item.label} className="text-right">
                {item.label}
            </Label>
            <Input id={item.label} className="col-span-3" />
          </div>)
        })}
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
