import React, { useEffect, useState } from 'react'
import banner from '../assets/images/about-banner.jpg'
import Header from '../Components/Common/Header'
import Layout from '../Components/Common/Layout'
import {BiLinkExternal} from 'react-icons/bi'

const Remedies = () => {
    const [productsList, setProductsList] = useState([]);
    const [alphabet, setAlphabet] = useState("");
    const products = [
        {
            id: 1,
            name: "Ameer"
        },
        {
            id: 4,
            name: "Awdwmeer"
        },
        {
            id: 5,
            name: "Ajmeer"
        },

        {
            id: 2,
            name: "B"
        },
        {
            id: 6,
            name: "Bwew"
        },
        {
            id: 7,
            name: "Bd"
        },
        {
            id: 8,
            name: "fC"
        },
        {
            id: 9,
            name: "yd"
        },
        {
            id: 10,
            name: "zsds"
        }
    ]
    const alpha = [];
    const alphabets = () => {
        for (var i = 65; i <= 90; i++) {
            alpha.push(String.fromCharCode(i))
        }
    }
    alphabets();
    useEffect(() => {
        let filtered = products.filter((e) => {
            if (alphabet === "" && (alphabet.toUpperCase() !== e.name.charAt(0).toUpperCase())) {
                return e
            }
            else if (alphabet.toUpperCase() === e.name.charAt(0).toUpperCase()) {
                console.log("first");
                return e
            }
        });
        if (filtered.length > 0) {
            setProductsList(filtered);
        }
        else if (filtered.length === 0) {
            setProductsList([]);
        }
    }, [alphabet]);

    const handleAlpha = (e) => {
        setAlphabet(e);
        console.log(alphabet);
    }
    const handleShowAll = () => {
        setAlphabet("")
    }

    return (
        <>
          <Layout>
          <section className='home-banner text-dark'>
                <Header />
                <div className='img-wrapper'>
                    <img src={banner} alt="home-banner" />
                </div>
                <div className='home-content'>
                    <h1>Remedies</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </section>
            <section className='search-section container'>
                <div className='remedies-search'>
                    <div className='head-section text-center mb-5'>
                        <h1>Find Your Remedy Here</h1>
                    </div>
                    <div className='search-buttons'>
                    {
                        alpha.map((e, i) => {
                            return <span key={i} onClick={() => { handleAlpha(e) }}>{e}</span>
                        })
                    }
                    </div>
                </div>
                <div className='remedies-result'>
                    <div className='d-flex justify-content-between my-3 align-items-center'>
                        {alphabet !== "" ? (<h2>{productsList.length} results by letter {alphabet}</h2>) : null}
                        {alphabet !== "" ?(<h6 onClick={handleShowAll} className="show-all">Show All</h6>):null}
                    </div>
                    <div className='results'>
                        {

                            productsList.length > 0 ? (productsList.map((e, i) => {
                                return (
                                    <div className='py-2 d-flex justify-content-between medicine-name align-items-center' key={i}>
                                        <h5>{e.name}</h5>
                                        <span><BiLinkExternal/></span>
                                        </div>
                                )
                            })) :null
                        }

                    </div>
                </div>

            </section>
          </Layout>
           
        </>
    )
}

export default Remedies