import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Employee from './Components/Employee'
import Category from './Components/Category'
import Profile from './Components/Profile'
import AddCategory from './Components/AddCategory'
import AddEmployee from './Components/AddEmployee'
import EditEmployee from './Components/EditEmployee';
import BarChartGraph from './Components/barchart'
import AnnualReport from './Components/AnnualReport'
import MonthlyReport from './Components/MonthlyReport'
import Insurance from './Components/Insurance'
import Travel from './Components/Travel'
import Forex from './Components/Forex'
import Gold from './Components/Gold'
// import AddPost from './Components/AddPost'
// import AddType from './Components/AddType'
import WeeklyReport from './Components/WeeklyReport'
import Add_Post_Type from './Components/Add_Post_Type'
import Post_Type from './Components/Post_Type'
import Add_Sub_Type from './Components/Add_Sub_Type'
import AddPost from './Components/AddPost'
import Post from './Components/Post'
import Gold_Post from './Components/Gold_Post'
import Gold_News from './Components/Gold_News'
import Gold_Notice from './Components/Gold_Notice'
import Gold_Circular from './Components/Gold_Circular'
import Insurance_Circular from './Components/Insurance_Circular'
import Insurance_News from './Components/Insurance_News'
import Insurance_Post from './Components/Insurance_Post'
import Insurance_Notice from './Components/Insurance_Notice'
import Forex_News from './Components/Forex_News'
import Forex_Circular from './Components/Forex_Circular'
import Forex_Post from './Components/Forex_Post'
import Forex_Notice from './Components/Forex_Notice'
import Travel_News from './Components/Travel_News'
import Travel_Circular from './Components/Travel_Circular'
import Travel_Post from './Components/Travel_Post'
import Travel_Notice from './Components/Travel_Notice'
import Edit_Post from './Components/Edit_Post'
import General from './Components/General'
import SearchBar from './Components/SearchBar'
import DonutChart from './Components/DonutChart'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/adminlogin' element={<Login />}></Route>
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path='' element={<Home />}></Route>
        <Route path='/dashboard/employee' element={<Employee />}></Route>
        <Route path='/dashboard/category' element={<Category />}></Route>
        <Route path='/dashboard/profile' element={<Profile />}></Route>
        <Route path='/dashboard/add_category' element={<AddCategory />}></Route>
        <Route path='/dashboard/add_employee' element={<AddEmployee />}></Route>
        <Route path='/dashboard/edit_employee/:id' element={<EditEmployee />}></Route>  
        <Route path='/dashboard/barchart' element={<BarChartGraph />}></Route>
        <Route path='/dashboard/annualreport' element={<AnnualReport />}></Route>
        <Route path='/dashboard/monthlyreport' element={<MonthlyReport />}></Route>
        <Route path='/dashboard/insurance' element={<Insurance/>}></Route>
        <Route path='/dashboard/travel' element={<Travel/>}></Route>
        <Route path='/dashboard/forex' element={<Forex/>}></Route>
        <Route path='/dashboard/gold' element={<Gold/>}></Route>
        <Route path='/dashboard/post' element={<Post/>}></Route>
        <Route path='/dashboard/add_post_type' element={<Add_Post_Type/>}></Route>
        <Route path ='/dashboard/add_sub_type' element={<Add_Sub_Type/>}></Route>
        <Route path ='/dashboard/addpost' element={<AddPost/>}></Route>
        <Route path='/dashboard/post_type' element={<Post_Type/>}></Route>
        <Route path='/dashboard/weeklyreport' element={<WeeklyReport/>}></Route>
        <Route path='/dashboard/gold_post' element={<Gold_Post/>}></Route>
        <Route path='/dashboard/gold_notice' element={<Gold_Notice/>}></Route>
        <Route path='/dashboard/gold_news' element={<Gold_News/>}></Route>
        <Route path='/dashboard/gold_circular' element={<Gold_Circular/>}></Route>
        <Route path='/dashboard/insurance_news' element={<Insurance_News/>}></Route>
        <Route path='/dashboard/insurance_circular' element={<Insurance_Circular/>}></Route>
        <Route path='/dashboard/insurance_post' element={<Insurance_Post/>}></Route>
        <Route path='/dashboard/insurance_notice' element={<Insurance_Notice/>}></Route>

        <Route path='/dashboard/forex_news' element={<Forex_News/>}></Route>
        <Route path='/dashboard/forex_circular' element={<Forex_Circular/>}></Route>
        <Route path='/dashboard/forex_post' element={<Forex_Post/>}></Route>
        <Route path='/dashboard/forex_notice' element={<Forex_Notice/>}></Route>

        <Route path='/dashboard/travel_news' element={<Travel_News/>}></Route>
        <Route path='/dashboard/travel_circular' element={<Travel_Circular/>}></Route>
        <Route path='/dashboard/travel_post' element={<Travel_Post/>}></Route>
        <Route path='/dashboard/travel_notice' element={<Travel_Notice/>}></Route>
        <Route path='/dashboard/edit_post/:id' element={<Edit_Post/>}></Route>
        <Route path='/dashboard/general' element={<General/>}></Route>
        <Route path ='/dashboard/searchbar' element={<SearchBar />}></Route>
        <Route path='/dashboard/donutchart' element={<DonutChart />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
