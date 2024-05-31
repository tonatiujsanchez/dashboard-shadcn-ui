'use client'
import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'

export default function Page() {

    const [date, setDate] = useState<Date | undefined>(new Date())
    const [multipleDates, setmultipleDates] = useState<Date[] | undefined>([])


    const smallDate = date?.toLocaleDateString('es-ES',{
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    })

    return (
        <div>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                <div className="flex flex-col gap-4 flex-wrap">
                    <div className="flex justify-center">
                        <h1>{smallDate}</h1>
                    </div>                    
                    <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border shadow"
                            disabled={ ( date )=> date.getDay() === 0 || date.getDay() === 6 }
                        />
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border shadow"
                            disabled={ ( date )=> date > new Date() }
                        />
                    </div>
                    
                </div>
                <div>
                    <div className='mb-5'>
                        <p>{ multipleDates?.map( date => date.toLocaleDateString('es-ES') ).join(', ') }</p>
                    </div>
                    <Calendar
                        mode="multiple"
                        selected={multipleDates}
                        onSelect={setmultipleDates}
                        className="rounded-md border shadow"
                    />
                </div>
                
            </div>
        </div>
    )
}