'use client'

import { useRef, useState } from 'react'
import classes from './imagePicker.module.css'
import Image from 'next/image'


const ImagePicker = ({ label, name }) => {
    const [pickedImage, setPickedImage] = useState()
    const imageInput = useRef()

    function handleImageChange(event) {
        const file = event.target.files[0]
        if (!file) {
            setPickedImage(null);
            return;
        }
        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }

    function pickClick() {
        imageInput.current.click()

    }


    return (
        <div className={classes.picker}>

            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div>
                    {!pickedImage &&
                        <p>No Image picked</p>

                    }
                    {pickedImage && <Image src={pickedImage} alt='image selected user' width={200} height={200} />
                    }
                </div>
                <input className={classes.input}
                    ref={imageInput}
                    type='file' id={name}
                    accept='image/png, image/jpeg' name {...name}
                    onChange={handleImageChange}
                    required

                />
                <button className={classes.button} type='button' onClick={pickClick}>pick an image</button>
            </div>
        </div>
    )
}

export default ImagePicker