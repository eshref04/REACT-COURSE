import React, { useContext, useState } from "react";
import "./CardsSection.css";
import MainContext from "../../context/Context";
import { Link } from "react-router-dom";

const CardsSection = () => {
    const { data, addToBasket } = useContext(MainContext);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState(null);

    return (
        <section className="cards__section">
            <div style={{padding:"100px 0px"}} className="container d-flex align-items-center flex-column">
                <h1>Popular Courses</h1>
                <div className="cards__section__btns d-flex gap-4 my-5">
                    <input value={search} onChange={(e) => setSearch(e.target.value)} className="p-2" type="text" placeholder="Search something" />
                    <div className="gap-3 d-flex">
                        <button onClick={() => setSort({field:"title",asc:true})} className="btn btn-primary">A-Z</button>
                        <button onClick={() => setSort({field:"title",asc:false})} className="btn btn-primary">Z-A</button>
                    </div>
                    <div className="gap-3 d-flex">
                        <button onClick={() => setSort({field:"price",asc:true})} className="btn btn-danger">Low to High</button>
                        <button onClick={() => setSort({field:"price",asc:false})} className="btn btn-danger">High to Low</button>
                    </div>
                    <button onClick={() => setSort(null)} className="btn btn-success">Default</button>
                </div>
                <div className="cards__section__crds flex-wrap d-flex gap-5">
                    {data.filter(x => x.title.toLowerCase().includes(search.toLowerCase()))
                        .sort((a, b) => {
                            if (!sort) return 0;
                            if (sort.asc) return a[sort.field] > b[sort.field] ? 1 : -1;
                            return a[sort.field] < b[sort.field] ? 1 : -1;
                        })
                        .map((item, index) => (
                            <div key={index} className="card" style={{width: "320px", height:"420px"}}>
                                <img width={"100%"} height={"240px"} src={item.image} className="card-img-top" alt="..." />
                                <div className="card-body justify-content-center d-flex flex-column">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.price}$</p>
                                    <div className="d-flex gap-3">
                                        <button onClick={() => addToBasket(item._id)} className="btn btn-success">Add to Cart</button>
                                        <Link to={`/detail/${item._id}`}>
                                            <button className="btn btn-primary">Detail</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default CardsSection;
