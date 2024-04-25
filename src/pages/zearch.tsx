"use client"
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

// import { Input } from "@/components/ui/input"

const CLIENT_ID = "3a53ac6e39fa4bac9b37d30d116845d2"
const CLIENT_SECRET = "1725ce1c99464e7f910da5f51266886a"

export default function Zearch() {
  const [zearch, setZearch]  = useState("")
  const [accessToken, setAcessToken]  = useState("")
  const [track , setTrack] = useState([])

  const handleSubmit = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  // Your form submission logic goes here
};

    useEffect(() => {

      // Do POST operation if you wan get access token
      var authParameters = {
        method: 'POST',
        headers : {
          'Content-Type': 'application/x-www-form-urlencoded'
        },

        // 4 body here we  go put & btw each variable we give fetch req
        body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
      }

      fetch("https://accounts.spotify.com/api/token", authParameters)

        //catches the promise dat then provides
      .then(rez => rez.json())
      .then(data => setAcessToken(data.access_token))      //get access to dat string directly ~ .access_token

      // .then(data => console.log(data.access_token))
    }, [])


    // we need the fxtion to be async cause inside we will do a latta fetch statements
    //And each fetch statement we want it to wait its turn
    async function search() {
        console.log("We dey search for" + zearch)

        //GET req using search get artist ID, root_url: https://api.spotify.com/v1/search
        var artistParams = {
          method: 'GET',
          headers: {
            'Content-Type' : 'application/json',

            // Are u a legit client ? It uses access_token we created b4
            'Authorization' : 'Bearer ' + accessToken 
          }
        }
        
        var trackID = await fetch('https://api.spotify.com/v1/search?q=' + zearch + '&type=track', artistParams)
            .then(rez => rez.json())
            .then(data => {

              //Get the artist ID
              const artistID = data.tracks.items[0].artists.id

              //Another fetch request
              return fetch(`https://api.spotify.com/v1/artists/${artistID}`, artistParams)
              .then(rez => rez.json())
              .then(artistData => {
                const newTrackData : number = { ...data.tracks.items[0], artistImage: artistData.images[0]?.url}
                setTrack([newTrackData])
                console.log(newTrackData)
              })

             
                })

      
 

        

            // console.log(trackInfo)
            //  .then(data => {
            //   console.log(data)
            //   setTrack(data.item)
            //  } 
            


        
        //this fetch is kinda pointless cause i am already fetching the data above
        var trackInfo = await fetch('https://api.spotify.com/v1/tracks/' + trackID, artistParams)
              .then(rez => rez.json())
              .then(data =>{
                console.log(data)
                setTrack(data.items)
              })

       


        

    }
 

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input type="input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required 

          onKeyDown={event => {
          if(event.key ==  "Enter") {
            search()  //Call the search fxtion when we press the input
            }
        }}
        onChange={event => setZearch(event.target.value)}
        />
        <button onClick = {event => {console.log("Clicked Button")}} type="submit" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
      </form>

      <div className="">
        {track}
        </div> 
      </div>
  )
}




//   <Form>
//   <form onSubmit={handleSubmit} className="max-w-sm mx-auto">

//   <FormField
//     // control={...}
//     name="..."
//     render={({field}) => (
//       <FormItem>
//         <FormLabel />
//         <FormControl>
//           { /* Your form field */}
//         <input type="input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required 

//         onKeyDown={event => {
//         if(event.key ==  "Enter") {
//           search()  //Call the search fxtion when we press the input
//           }
//       }}
//       onChange={event => setZearch(event.target.value)}
//       />

//         </FormControl> 
//         <FormDescription>
//             This is the zpotify input search
//         </FormDescription>
//         <FormMessage />
//       </FormItem>
//     )}
//     />

//     <button onClick = {event => {console.log("Clicked Button")}} type="submit" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
//     </form>
// </Form>