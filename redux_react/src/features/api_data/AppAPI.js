import React , {useState, useEffect  } from "react";
import { useSelector, useDispatch } from "react-redux"
import { request_next_page, request_previous_page, request_send } from './api_data_slices'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert,Button } from 'react-bootstrap';


export default function AppAPI() {
    const url = "http://localhost:8000/"
    const datas = useSelector((state) => state.counterme.data)
    const dispatch = useDispatch()
    const next_previous = [];
    next_previous[0] = useSelector((state) => state.counterme.previous)
    next_previous[1] = useSelector((state) => state.counterme.next)
    const [Error_data, Up_Error_data] = useState(null);

        const fetch_data_api = async (url) => {

            await axios
              .get(url).then((response) => {
                dispatch(request_send(response.data["results"]));
                dispatch(request_next_page(response.data["next"]));
                dispatch(request_previous_page(response.data["previous"]));
              })
              .catch((err) => {
                Up_Error_data("error")
              });
          };

          useEffect(() => {
            fetch_data_api(url);
          }, []);
          function _onclick_call(_prev_nex_url){
            fetch_data_api(_prev_nex_url);
          }
          return (
            <div>
                    <h1><center>Book Details</center></h1>

                    <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                    {datas.map(item => {

                    return (

                          <tr key={item["id"]}>
                            <th scope="row">{item["id"]}</th>
                            <td>{item["title"]}</td>
                            <td>{item["description"]}</td>
                            <td>Rs {item["price"]}</td>
                          </tr>
                        )
                    })}

                      </tbody>
                      </table>
                      <br></br>
                      {
                        (Error_data)?
                        <center><Alert variant="danger">There was something wrong<br></br>Refresh Page</Alert></center>
                        :
                        null
                      }
                      {(next_previous[0])?
                          <Button type="button" onClick={() => _onclick_call(next_previous[0])}  variant="success" className="float-left ml-2">Previous</Button>
                        :
                          <Button type="button"  variant="danger" className="float-left ml-2" disabled>Previous</Button>
                      }
                       {(next_previous[1])?
                          <Button type="button" onClick={() => _onclick_call(next_previous[1])}  variant="success"  className="float-right mr-2">Next</Button>
                        :
                          <Button type="button"  variant="danger" className="float-right mr-2" disabled>Next</Button>
                      }

                  </div>
        )
        }
