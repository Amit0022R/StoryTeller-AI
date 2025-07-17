"use client"

import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "./ui/select";
import { Textarea } from "./ui/textarea";

function StoryBox() {
  return (
    <div className="flex flex-col container" >
      <section className="flex-1 flex flex-col border border-purple-300 rounded-md p-10 space-y-2" > 
        <Textarea/>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="How many pages should tge story be?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="6">6</SelectItem>
            <SelectItem value="7">7</SelectItem>
            <SelectItem value="8">8</SelectItem>
            <SelectItem value="9">9</SelectItem>
            <SelectItem value="10">10</SelectItem>
          </SelectContent>
        </Select>
      </section>
      <section className="flex-1 pb-5 mt-5" > </section>
    </div>
  );
}

export default StoryBox;
