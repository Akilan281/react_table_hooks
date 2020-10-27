import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { homeData, loaderAction } from '../../../redux/action/Action'
import './styles/home.css'

function HomeComponent(props) {
    const [tabKey, setTabKey] = useState([])
    const [tableList, setTableList] = useState([])

    useEffect(() => {
        props.loaderAction(true)
        fetch('http://timeapi.kaaylabs.com/api/v1/project_view/ ', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Applicatiom-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(response => response.json())
            .then((data) => {
                setTableList(data.data)
                props.homedata(data.data)
                setTabKey(Object.keys(data.data[0]))
                props.loaderAction(false)

            })


    }, [])

    function handleSelect(value) {
        let homestore = Object.assign([], props.homestore)
        if (value == "All") {
            setTableList(homestore)
        } else {
            let selectedOption = homestore.filter((item) => item.status == value)
            setTableList(selectedOption)
        }
    }


    return (
        <div className="page-body">
            <div className=" container">
                <div className="Dropdwon" >
                    <label for="cars">Filter by Status:</label>
                    <select name="cars" id="cars" onChange={(e) => handleSelect(e.target.value)}>
                        <option value="All" >All</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className="table-list">
                    <table className="table table-bordered table-dark ">
                        <thead>
                            <tr>
                                {
                                    tabKey.map((itemkey) => {
                                        return (
                                            <th scope="col">{itemkey}</th>
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>

                            {
                                tableList.map((item => {
                                    return (
                                        <tr>

                                            <td>{item.project_id}</td>
                                            <td>{item.project_code}</td>
                                            <td>{item.description}</td>
                                            <td>{item.start_date}</td>
                                            <td>{item.end_date}</td>
                                            <td>{item.company_name}</td>
                                            <td>{item.status}</td>
                                        </tr>
                                    )
                                }))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ HomeReducer }) => {
    console.log("HomeReducer", HomeReducer)
    return {
        homestore: HomeReducer.homelist
    }

}

//! Getting the reducers and dispatch the action values in to the redux!//
const mapDispatchToProps = (dispatch) => {
    return {
        homedata: (data) => (dispatch(homeData(data))),
        loaderAction: (data) => (dispatch(loaderAction(data)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent)


