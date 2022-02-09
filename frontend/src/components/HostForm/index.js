import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {addSpot} from '../../store/spots'
import './hostform.css';


function HostForm(){
//   const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const session = useSelector(state => state.session)
    
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [guests, setGuests] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [url, setUrl] = useState("");
    const [kitchen, setKitchen] = useState("");
    const [parking, setParking] = useState("");
    const [patio, setPatio] = useState("");
    const [pool, setPool] = useState("");
    const [gym, setGym] = useState("");
    const [hotTub, setHotTub] = useState("");
    const [pets, setPets] = useState("");
    const [errorValidator, setErrorValidator] = useState([])


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const payload = {
            amenities: {
                parking,
                kitchen,
                patio,
                gym,
                pool,
                hotTub,
                pets
            },
            spots: {
                userId: session.user.id,
                address,
                city,
                zipCode,
                state,
                country,
                title,
                description,
                price,
                guests,
                bedrooms,
                bathrooms
            },
            image: {
                url
            }
        }
        let spotCreated;
        try {
            spotCreated = await dispatch(addSpot(payload));
        } catch (error) {
            throw new Error("Something went wrong")
        }
        if (spotCreated) {
            history.push(`/spots/${spotCreated.id.id}`)
        }
    };


    return (
        <div className="host_form">
            <form onSubmit={handleSubmit}>
                <h1>Host Form</h1>
      <ul>
        {errorValidator.map(error => (
          <li className="error_list" key={error}>{error}</li>
        ))}
      </ul>
      <label id="form_label_address">
        Address
        <input id="form_address_text_input"
          type="text"
          placeholder="Address here..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </label>
      <label id="form_label_city">
        City
        <input id="form_city_text_input"
          type="text"
          placeholder="City here ..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </label>
      <label id="form_label_zipCode">
        Zip Code
        <input id="form_zipCode_text_input"
          type="text"
          placeholder="Zip Code here ..."
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          required
        />
      </label>
      <label id="form_label_state">
        State
        <input id="form_state_text_input"
          type="text"
          placeholder="State here ..."
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
      </label>
      <label id="form_label_country">
        Country
        <input id="form_country_text_input"
          type="text"
          placeholder="Country here ..."
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      </label>
      <label id="form_label_title">
        Title
        <input id="form_title_text_input"
          type="text"
          placeholder="Title here ..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label id="form_label_description">
        Description
        <input id="form_description_text_input"
          type="text"
          placeholder="Description here ..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label id="form_label_price">
        Price
        <input id="form_price_text_input"
          type="text"
          placeholder="Price here ..."
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <label id="form_label_guests">
        Guests
        <input id="form_guests_text_input"
          type="text"
          placeholder="Guests here ..."
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
      </label>
      <label id="form_label_bedrooms">
        Bedrooms
        <input id="form_bedrooms_text_input"
          type="text"
          placeholder="Bedrooms here ..."
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          required
        />
      </label>
      <label id="form_label_bathrooms">
        Bathrooms
        <input id="form_bathrooms_text_input"
          type="text"
          placeholder="Bathrooms here ..."
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
          required
        />
      </label>
      <label id="form_label_url">
        Image Url
        <input id="form_url_text_input"
          type="text"
          placeholder="Url here ..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </label>
      <div className="checkboxes">
      <label id="form_label_kitchen">
        Kitchen
        <input id="form_kitchen_text_input"
          type="checkbox"
          value={kitchen}
          onChange={(e) => setKitchen(!kitchen)}
        />
      </label>
      <label id="form_label_parking">
        Parking
        <input id="form_parking_text_input"
          type="checkbox"
          value={parking}
          onChange={(e) => setParking(!parking)}
        />
      </label>
      <label id="form_label_patio">
        Patio
        <input id="form_patio_text_input"
          type="checkbox"
          value={patio}
          onChange={(e) => setPatio(!patio)}
        />
      </label>
      <label id="form_label_pool">
        Pool
        <input id="form_pool_text_input"
          type="checkbox"
          value={pool}
          onChange={(e) => setPool(!pool)}
        />
      </label>
      <label id="form_label_gym">
        Gym
        <input id="form_gym_text_input"
          type="checkbox"
          value={gym}
          onChange={(e) => setGym(!gym)}
        />
      </label>
      <label id="form_label_hottub">
        Hot Tub
        <input id="form_hottub_text_input"
          type="checkbox"
          value={hotTub}
          onChange={(e) => setHotTub(!hotTub)}
        />
      </label>
      <label id="form_label_pets">
        Pets
        <input id="form_pets_text_input"
          type="checkbox"
          value={pets}
          onChange={(e) => setPets(!pets)}
        />
      </label>
      </div>
      <button id="submit_form_button" type="submit">Submit</button>
            </form>
            </div>
  );
      
}

export default HostForm;


  

  



