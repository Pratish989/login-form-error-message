import { NavLink } from "react-router-dom"
function StyleNavbarPublic() {
  console.log("StyleNavbarPublic Rendered");

  return (
   <nav className='navbar'>
   <NavLink 
     to='/home'
     className={({ isActive }) => (isActive ? 'link active' : 'link')}
   >
     Home
   </NavLink>
   <NavLink
     to='/about'
     className={({ isActive }) => (isActive ? 'link active' : 'link')}
   >
     About
   </NavLink>
   <NavLink
     to='/contact'
     className={({ isActive }) => (isActive ? 'link active' : 'link')}
   >
     Contact
   </NavLink> 
   <NavLink
     to='/login'
     className={({ isActive }) => (isActive ? 'link active' : 'link')}
   >
     Login
   </NavLink>
   
 </nav>
  )
}

export default StyleNavbarPublic
