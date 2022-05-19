import React from "react";
import HeaderPage from "./HeaderPage";
import SubHeaderPage from "./SubHeaderPage";
import SingleCart from "./SingleCart";
import Email from "./Email";
import InfoPage from "./InfoPage";
import FooterPage from "./FooterPage";
import { useParams } from "react-router-dom";

import "./cart.css"
export default function Home({match}){
	window.scrollTo(0,0);

	//const dispatch = useDispatch()
   const keyword = useParams()
	const pageNumber = useParams()
	//const {keyword,pageNumber} = props
	//const productList = useSelector((state) => state.productList)
	
//	useEffect(() => {
//		dispatch(listProduct(keyword,pageNumber))
//	},[dispatch,keyword,pageNumber])
   // const keyword = match.params.keyword;
	//const pageNumber = match.params.pageNumber;
	return (
		<>
			<HeaderPage/>
		    <SubHeaderPage/>
		    <SingleCart keyword={keyword} pageNumber={pageNumber}/>
		    <Email/>
		    <InfoPage/>
		    <FooterPage/>
		</>
	)
}