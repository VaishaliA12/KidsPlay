
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import CardSlider from "../components/CardSlider";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, getGenres, getUsersLikedMovies } from "../store";
import SelectGenre from "../components/SelectGenre";
import Slider from "../components/Slider";
import NotAvailable from "../components/NotAvailable";
import Card from "../components/Card";

export default function UserLiked() {
    const [isScrolled, setIsScrolled] = useState(false);
    const movies = useSelector((state) => state.netflix.movies);
    //const genres = useSelector((state) => state.netflix.genres);
    //const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState(undefined);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      setEmail(currentUser.email);
    } else navigate("/login");
  });
  
    useEffect(() => {
     if(email){
        dispatch(getUsersLikedMovies(email));
     }
    }, [email]);
  
    // useEffect(() => {
    //   if (genresLoaded) {
    //     dispatch(fetchMovies({ genres, type: "movie" }));
    //   }
    // }, [genresLoaded]);
  
    const [user, setUser] = useState(undefined);
  
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
    return <Container>
        <Navbar isScrolled={isScrolled} />
        <div className="content flex column">
            <h1>My List</h1>
            <div className="grid flex">
                {movies.map((movie,index)=>{
                    return <Card movieData={movie} index = {index} key={movie.id} isLiked={true}/>
                })}
            </div>
        </div>
    </Container>;
}

const Container = styled.div`
 .content{
    margin: 2.3rem;
    margin-top: 8rem;
    gap: 3rem;
    h1{
        margin-left: 3rem;
    }
    .grid{
        flex-wrap: wrap;
        gap: 1rem;
    }
 }
` ;