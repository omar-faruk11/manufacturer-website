import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash } from '@fortawesome/free-solid-svg-icons'


const Modal = ({setConfirma }) => {
    return (
        <>
            <input type="checkbox" id="confirma" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box w-16">
                <div className=' flex justify-center my-4'>
                    <FontAwesomeIcon className="w-8 h-8 text-red-500" icon={faTrash}/>
                </div>
                    <h3 class="font-bold text-lg text-center">Are your sure You want to delete this.</h3>
                    <div class="modal-action justify-center">
                        <div>
                        <label for="confirma" class="btn btn-sm btn-outline mx-2 rounded-sm ">Cencel</label>
                        <label for="confirma" onClick={()=> setConfirma(true)} class="btn btn-sm btn-error  mx-2 rounded-sm ">Confirma </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;