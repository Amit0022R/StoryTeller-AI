"use client"

import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "./ui/select";
import { Textarea } from "./ui/textarea";

function StoryBox() {
  return (
    <div className="flex flex-col container" >
      <section className="flex-1 flex flex-col border border-purple-300 rounded-md p-10 space-y-2" > 
        <Textarea
          placeholder="Write a story about a robot and human who become friends...!"
        />
        <Select>
          <SelectTrigger  >
            <SelectValue placeholder="How many pages should tge story be?" />
          </SelectTrigger>
          <SelectContent className="w-full" > 
           {Array.from({length:10}, (_,i) => (
            <SelectItem key={i} value={String(i+1)} >
              {i+1}
              </SelectItem>
           ))}
          </SelectContent>
        </Select>
      </section>
      <section className="flex-1 pb-5 mt-5" > </section>
    </div>
  );
}

export default StoryBox;
