import React from 'react';
import { NavLink, Link } from "react-router-dom";

class RegisteredList extends React.Component {
    static defaultProps = {
        cars: []
      };
    
      render() {
        let goBack;
        const cars = this.context.cars.map(cars => {
          return (
            <NavLink
              to={`/cars/${cars.id}`}
              key={cars.id}
            >
              {cars.model}
            </NavLink>
          );
        });
    
        return (
          <div className="folderList">
            {cars}
            {''}
            {goBack}
            <button className="addFolder">Add Folder</button>
          </div>
        );
      }
}

export default RegisteredList;