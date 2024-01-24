import React, {Component} from "react";
import axios, {AxiosInstance} from "axios";
import StoragePieCharts from "./StoragePieCharts";
// import {UserPieCharts} from "./UserPieCharts";

interface StorageData {
    storageSizeMB: number;
    dataSizeMB: number;
    mbLeft: number;
}

export class AdminDashboard extends Component {
    private api: AxiosInstance;
    public static data:StorageData
    constructor(props: {}) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});

        AdminDashboard.data={
            storageSizeMB: 5,
            dataSizeMB: 2,
            mbLeft: 1,
        };
    }

    componentDidMount() {
        this.fetchDBStats();
    }

    async fetchDBStats() {
        try {
            this.api.get('users/stats')
                .then((res: { data: any }) => {
                    const jsonData = res.data;
                    console.log(jsonData)
                    AdminDashboard.data.dataSizeMB=jsonData.dataSizeMB
                    AdminDashboard.data.mbLeft=jsonData.mbLeft
                }).catch((error: any) => {
                console.error('Axios Error:', error)
            });
        } catch (error) {
            console.log('Error fetching data: ', error)
        }
    }

    render() {
        return (
            <div className={"w-full h-full relative pb-4"}>
                <h2 className="text-2xl font-bold sm:text-xl pt-8 ps-3 w-max">Dashboard</h2>


                <div className={"w-full h-1/2 pt-2 p-4 flex justify-between"}>
                    <div className="w-[48%] rounded-xl h-full drop-shadow-md bg-white">
                        <h1 className={"font-bold text-gray-800 text-center pt-2"}>Database stats</h1>
                        <StoragePieCharts></StoragePieCharts>
                    </div>
                    <div className="w-[48%] rounded-xl h-full drop-shadow-md bg-white">
                        <h1 className={"font-bold text-gray-800 text-center pt-2"}>Database stats</h1>
                        {/*<UserPieCharts></UserPieCharts>*/}
                    </div>
                </div>

                <div className={"w-full h-1/4 bg-tertiary pt-2"}>

                </div>

                <div className={"w-full h-1/4 pt-2"}>

                </div>

            </div>
        );
    }
}