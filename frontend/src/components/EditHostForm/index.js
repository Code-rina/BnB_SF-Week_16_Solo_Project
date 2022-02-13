import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import {editSpot} from "../../store/spots"
import {getOneSpot} from "../../store/spots"
import './edithostform.css';


function EditHostForm(){
    const dispatch = useDispatch()
    const history = useHistory()
    const session = useSelector(state => state.session)
    const {spotId} = useParams()
    const spotInfo = useSelector(state => state.spots[spotId])

    const [address, setAddress] = useState(spotInfo?.address);
    const [city, setCity] = useState(spotInfo?.city);
    const [zipCode, setZipCode] = useState(spotInfo?.zipCode);
    const [state, setState] = useState(spotInfo?.state);
    const [country, setCountry] = useState(spotInfo?.country);
    const [title, setTitle] = useState(spotInfo?.title);
    const [description, setDescription] = useState(spotInfo?.description);
    const [price, setPrice] = useState(spotInfo?.price);
    const [guests, setGuests] = useState(spotInfo?.guests);
    const [bedrooms, setBedrooms] = useState(spotInfo?.bedrooms);
    const [bathrooms, setBathrooms] = useState(spotInfo?.bathrooms);
    const [url, setUrl] = useState(spotInfo?.Images[0]?.url);
    const [kitchen, setKitchen] = useState(spotInfo?.Amenities[0]?.kitchen);
    const [parking, setParking] = useState(spotInfo?.Amenities[0]?.parking);
    const [patio, setPatio] = useState(spotInfo?.Amenities[0]?.patio);
    const [pool, setPool] = useState(spotInfo?.Amenities[0]?.pool);
    const [gym, setGym] = useState(spotInfo?.Amenities[0]?.gym);
    const [hotTub, setHotTub] = useState(spotInfo?.Amenities[0]?.hotTub);
    const [pets, setPets] = useState(spotInfo?.Amenities[0]?.pets);
    const [errorValidator, setErrorValidator] = useState([])


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const payload = {
            amenities: {
                id: spotInfo?.Amenities[0]?.id,
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
                id: spotInfo?.Images[0]?.id,
                url
            }
        }
        let spotCreated;
        try {
        spotCreated = await dispatch(editSpot(payload, spotId));
        
        } catch (error) {
            throw new Error("Something went wrong")
        }
        if (spotCreated) {
            history.push(`/spots/${spotCreated.id.id}`)
            
        }
    };

    useEffect(() => {
        dispatch(getOneSpot(spotId))
        if(address) localStorage.setItem("address", spotInfo?.address)
        if(city) localStorage.setItem("city", spotInfo?.city)
        if(zipCode) localStorage.setItem("zipCode", spotInfo?.zipCode)
        if(state) localStorage.setItem("state", spotInfo?.state)
        if(country) localStorage.setItem("country", spotInfo?.country)
        if(title) localStorage.setItem("title", spotInfo?.title)
        if(description) localStorage.setItem("price", spotInfo?.price)
        if(guests) localStorage.setItem("guests", spotInfo?.guests)
        if(bedrooms) localStorage.setItem("bedrooms", spotInfo?.bedrooms)
        if(bathrooms) localStorage.setItem("bathrooms", spotInfo?.bathrooms)
        if(url) localStorage.setItem("url", spotInfo?.Images[0]?.url)
        if(kitchen) localStorage.setItem("kitchen", spotInfo?.Amenities[0]?.kitchen)
        if(parking) localStorage.setItem("parking", spotInfo?.Amenities[0]?.parking)
        if(patio) localStorage.setItem("patio", spotInfo?.Amenities[0]?.patio)
        if(pool) localStorage.setItem("pool", spotInfo?.Amenities[0]?.pool)
        if(gym) localStorage.setItem("gym", spotInfo?.Amenities[0]?.gym)
        if(hotTub) localStorage.setItem("hotTub", spotInfo?.Amenities[0]?.hotTub)
        if(pets) localStorage.setItem("pets", spotInfo?.Amenities[0]?.pets)
    }, [])

    useEffect(()=> {
        const errors = []
        if(address?.length > 255 || address?.length === 0) errors.push("Address must be less than 255 characters");
        if(city?.length > 255 || city?.length === 0) errors.push("City must be less than 255 characters");
        if((zipCode?.length > 0 && zipCode?.length > 6) || zipCode?.length === 0) errors.push("Please provide a valid Zip Code");
        if(state?.length > 30 || state?.length === 0) errors.push("Please provide a valid state name");
        if(country?.length > 100 || country?.length === 0) errors.push("Please provide a valid country name");
        if(title?.length > 50 || title?.length === 0) errors.push("Title must be less than 50 characters");
        if(description?.length === 0) errors.push("Please provide a description");
        if(price < 1 && price !== 0) errors.push("Please provide a valid price");
        if(guests < 1 && guests !== 0) errors.push("Please provide a guest count");
        if(bedrooms < 1 && bedrooms !== 0) errors.push("Please provide a bedroom count");
        if(bathrooms < 1 && bathrooms !== 0) errors.push("Please provide a bathroom count");
        if(url?.length > 255 || url?.length === 0 || !url?.includes("http" || "https")) errors.push("Please provide a valid Url address");
        setErrorValidator(errors)
    }, [address, city, zipCode, state, country, title, description, price, guests, bedrooms, bathrooms, url])
    

    return (
      <div className="host_form">
      <form onSubmit={handleSubmit}>
      <div id="form_container">
        <div id="host_form_top">
          <h3 id="top_title">Become a Host</h3>
<ul id="errors_form">
  {errorValidator.map(error => (
    <li className="error_list" key={error}>{error}</li>
  ))}
</ul>
</div>
<div id="host_form_left">
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
<button id="submit_form_button" 
type="submit" 
disabled={errorValidator.length > 0}>Submit</button>
      <Link id="cancel_form_button" exact="true" to="/">Cancel</Link>
      </div>
      </div>
      </form>
      </div>
   
);

}

export default EditHostForm;