"use client"
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {subjects} from "@/constants";
import {formUrlQuery, removeKeysFromUrlQuery} from "@jsmastery/utils";

const SubjectFilter = () => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const [subject, setSubject] = useState("");

    const query = searchParams.get("subject") || "";

    useEffect(() => {
        const delayDebounceFn = setTimeout(()=> {

            if(subject !== 'All Subjects') {
                const newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: "subject",
                    value: subject,
                });

                router.push(newUrl, {scroll: false});
            } else {
                if(subject === 'All Subjects'){
                    const newUrl = removeKeysFromUrlQuery({
                        params: searchParams.toString(),
                        keysToRemove: ["subject"],
                    });

                    router.push(newUrl, { scroll: false });
                }
            }
        }, 500)
    }, [subject]);

    return (
        <Select onValueChange={setSubject} value={subject}>
            <SelectTrigger className="input capitalize">
                <SelectValue placeholder="Select a Subject" />
            </SelectTrigger>
            <SelectContent >
                <SelectGroup >
                    <SelectLabel>Subjects</SelectLabel>
                    <SelectItem value={'All Subjects'}>All Subjects</SelectItem>
                    {subjects.map((subject) => (
                        <SelectItem value={subject} key={subject} className={'capitalize'}>{subject}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
export default SubjectFilter
