import React from 'react';

const ShowTicket = ({ complain }) => {
    // const {name, type, complain, status } = complain;
    console.log(complain)
    return (
        <div>
            <div class="overflow-x-auto">
            <table class="table table-compact w-full">
                    <tbody>
                        <tr>
                            
                            <td>{complain.name}</td>
                            <td>{complain.type}</td>
                            <td>{complain.complain}</td>
                            <td>{complain.status}</td>
                            
                        </tr>
                        
                    </tbody>
                   </table>
                
            </div>
        </div>
    );
};

export default ShowTicket;