/*::::::::::::::::::::::::::::::::::::::::
::::::  Importing CSS, Dependencies  :::::
::::::::::::::::::::::::::::::::::::::::*/

import './Stations.css';
import NavBar from '../NavBar/NavBar';
import React from 'react';



/*::::::::::::::::::::::::::::::::::::::::
:::  Creating Landing Page Component  ::::
::::::::::::::::::::::::::::::::::::::::*/

class Stations extends React.Component {

    render() {

        return(

            <>

                <div className="stations-container">

                    <h1 className="stations__heading">
                        Connect to the Podcast
                    </h1>

                    <section className="stations__listings">

                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="stations_icon"
                        viewBox="0 0 24 24"
                        >

                            <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 
                            005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 
                            0018.66 0zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 
                            1.272 1.912 2.619 2.264 4.392.12.59.12 2.2.007 2.864a8.506 
                            8.506 0 01-3.24 5.296c-.608.46-2.096 1.261-2.336 1.261-.088 
                            0-.096-.091-.056-.46.072-.592.144-.715.48-.856.536-.224 
                            1.448-.874 2.008-1.435a7.644 7.644 0 
                            002.008-3.536c.208-.824.184-2.656-.048-3.504-.728-2.696-2.928-4.792-5.624-5.352-.784-.16-2.208-.16-3 
                            0-2.728.56-4.984 2.76-5.672 5.528-.184.752-.184 2.584 0 3.336.456 1.832 1.64 
                            3.512 3.192 4.512.304.2.672.408.824.472.336.144.408.264.472.856.04.36.03.464-.056.464-.056 
                            0-.464-.176-.896-.384l-.04-.03c-2.472-1.216-4.056-3.274-4.632-6.012-.144-.706-.168-2.392-.03-3.04.36-1.74 
                            1.048-3.1 2.192-4.304 1.648-1.737 3.768-2.656 6.128-2.656zm.134 2.81c.409.004.803.04 
                            1.106.106 2.784.62 4.76 3.408 4.376 6.174-.152 1.114-.536 2.03-1.216 2.88-.336.43-1.152 
                            1.15-1.296 1.15-.023 0-.048-.272-.048-.603v-.605l.416-.496c1.568-1.878 
                            1.456-4.502-.256-6.224-.664-.67-1.432-1.064-2.424-1.246-.64-.118-.776-.118-1.448-.008-1.02.167-1.81.562-2.512 
                            1.256-1.72 1.704-1.832 4.342-.264 6.222l.413.496v.608c0 .336-.027.608-.06.608-.03 
                            0-.264-.16-.512-.36l-.034-.011c-.832-.664-1.568-1.842-1.872-2.997-.184-.698-.184-2.024.008-2.72.504-1.878 
                            1.888-3.335 3.808-4.019.41-.145 1.133-.22 1.814-.211zm-.13 2.99c.31 0 .62.06.844.178a2.17 2.17 
                            0 011.04 1.259c.464 1.578-1.208 2.96-2.72 2.254h-.015c-.712-.331-1.096-.956-1.104-1.77 0-.733.408-1.371 
                            1.112-1.745.224-.117.534-.176.844-.176zm-.011 4.728c.988-.004 1.706.349 1.97.97.198.464.124 1.932-.218 
                            4.302-.232 1.656-.36 2.074-.68 2.356-.44.39-1.064.498-1.656.288h-.003c-.716-.257-.87-.605-1.164-2.644-.341-2.37-.416-3.838-.218-4.302.262-.616.974-.966 
                            1.97-.97z"></path>

                        </svg>

                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="stations_icon"
                        viewBox="0 0 24 24"
                        >

                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 
                            17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 
                            8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 
                            9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 
                            4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"></path>
                        
                        </svg>

                        <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        className="stations_icon" 
                        viewBox="0 0 24 24"
                        >

                            <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 
                            3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 
                            9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 
                            15.601V8.408l6.264 3.602z"></path>
                        
                        </svg>

                    </section>

                    <p className="stations__text">
                        Find us on Apple Podcasts, Spotify, &amp; YouTube!
                    </p>

                </div>

                <NavBar/>

            </>

        )

    }

}



/*::::::::::::::::::::::::::::::::::::::::
:::  Exporting Landing Page Component  :::
::::::::::::::::::::::::::::::::::::::::*/

export default Stations;