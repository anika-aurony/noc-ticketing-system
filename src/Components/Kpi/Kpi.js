import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Kpi = () => {
    const [complains, setComplains] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/ticket')
            .then(res => res.json())
            .then(data => setComplains(data))
    }, [])

    const rFilters = complains.filter(complain => complain.status === "resolved")
    const onFilters = complains.filter(complain => complain.status === "on-progress")
    const pFilters = complains.filter(complain => complain.status === "pending")
    console.log(rFilters)

    const e = [];
    for (let index = 0; index < rFilters.length; index++) {
        const element = rFilters[index];
        console.log(element)
        const y = element.resolveDate
        console.log(y);
        e.push(y);
        console.log(e)
    }

    const counts = {};
    const sampleArray = e;
    sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    console.log(counts)

    var dates = counts;
    var result = Object.keys(dates).map(e => ({ date: e, count: dates[e] }))
    console.log(result)

    return (
        <div>
            <p className='text-2xl text-center my-4'>Key performance Indicator</p>

            <div className=' flex justify-center items-center'>
                <div class="stats shadow  ">

                    <div class="stat place-items-center">
                        <div class="stat-title">Pending Ticket</div>
                        <div class="stat-value">{pFilters.length}</div>

                    </div>

                    <div class="stat place-items-center">
                        <div class="stat-title">On-progress Ticket</div>
                        <div class="stat-value text-secondary">{onFilters.length}</div>

                    </div>

                    <div class="stat place-items-center">
                        <div class="stat-title">Resolved Ticket</div>
                        <div class="stat-value">{rFilters.length}</div>

                    </div>

                </div>
            </div>
            <p className='text-2xl text-center mt-4'>Datewise Resolved Ticket</p>
            <div className="flex justify-center items-center">
                <BarChart width={800} height={300} data={result} className="m-9">
                    <Bar dataKey="count" fill="#8884d8" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                </BarChart>
            </div>
        </div>
    );
};

export default Kpi;