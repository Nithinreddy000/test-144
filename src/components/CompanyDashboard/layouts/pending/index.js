import React, { useState, useRef ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "../dashboard/dashboardstyles.css"; // Import the custom CSS here
import MDBox from "../../components/MDBox";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";
import ComplexStatisticsCard from "../../examples/Cards/StatisticsCards/ComplexStatisticsCard";
import ReportsBarChart from "../../examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "../../examples/Charts/LineCharts/ReportsLineChart";
import reportsBarChartData from "../dashboard/data/reportsBarChartData";
import reportsLineChartData from "../dashboard/data/reportsLineChartData";
import Projects from "../dashboard/components/Projects";
import OrdersOverview from "../dashboard/components/OrdersOverview";
import EntranceIcon from '@mui/icons-material/ExitToApp';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { Link as ScrollLink } from 'react-scroll';


function Pending() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showProjectsAndOrders, setShowProjectsAndOrders] = useState(false);
  const [clickTimeout, setClickTimeout] = useState(null);
  
  const handleCardClick = () => {
    setShowProjectsAndOrders(true); // Ensure Projects and OrdersOverview are shown
    scrollToProjectsAndOrders(); // Scroll to the Projects and OrdersOverview section
  };
  
  

  const scrollToProjectsAndOrders = () => {
    const section = document.getElementById('projectsAndOrdersOverview');
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (showProjectsAndOrders) {
      scrollToProjectsAndOrders();
    }
  }, [showProjectsAndOrders]);
  const handleSearch = (query) => {
    // Debounce the state update with a delay of 300 milliseconds
    setTimeout(() => {
      setSearchQuery(query.toLowerCase());
    }, 300);
  };

  const filterDivisions = (content) => {
    return content.toLowerCase().includes(searchQuery);
  };


  

  return (
    <DashboardLayout>
      <DashboardNavbar onSearch={handleSearch} />
      <MDBox py={3} >
        <h3 style={{paddingLeft: '10px',fontFamily: 'Poppins, sans-serif',paddingTop:'0%' ,marginTop:'0%'}}>INWARD</h3>
        <div className="swiper-container">
        <Swiper
        spaceBetween={16}
        slidesPerView={4} // Default number of slides per view
        breakpoints={{
          0: {
            slidesPerView: 1, // 1 slide per view for screens from 0 to 900px
          },
          768: {
            slidesPerView: 2,  // 1 slide per view for screens up to 900px
          },
          1300: {
            slidesPerView: 4, // 4 slides per view for screens larger than 1300px
          },
          // Add more breakpoints if needed
        }}
      
        modules={[Navigation]}
        navigation={{ clickable: true }}
        loop={true} 
        >

            {filterDivisions("Tmt Bars") && (
              <SwiperSlide>
                <div className="card-container">
                  <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={1.5} onClick={handleCardClick} style={{ cursor: "pointer" }}>
                      <ComplexStatisticsCard
                        icon="bar_chart"
                        title={<h3 style={{ fontSize: '24px' ,fontFamily: 'Poppins, sans-serif'}}>Tmt Bars</h3>}
                        percentage={{
                          amount: (
                            <div style={{ fontFamily: 'Poppins, sans-serif'}}>
                           <div style={{ paddingBottom: '1px' }}>
                              Approval Pending: {42}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Dispatch Pending: {22}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Processing: {20}
                            </div>
                            <br />
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1px' ,fontSize:'12px'}}>
                    <div style={{ textAlign: 'left', flex: 1 }}>
                      <div>Quantity&nbsp;&nbsp;</div>
                      <div>400</div>
                    </div>
                    <div style={{ textAlign: 'center', flex: 1 }}>
                      <div>Dispatch&nbsp;&nbsp;</div>
                      <div>20%</div>
                    </div>
                    <div style={{ textAlign: 'center', flex: 1 }}>
                      <div>Balance&nbsp;&nbsp;</div>
                      <div>24000</div>
                    </div>
                    <div style={{ textAlign: 'right', flex: 1 }}>
                      <div>AvgRate</div>
                      <div>4000</div>
                    </div>
                  </div>
                          </div>
                          ), 
                        }}
                      />
                    </MDBox>
                  </Grid>
                </div>
              </SwiperSlide>
            )}
            {filterDivisions("Billets") && (
              <SwiperSlide>
                <div className="card-container">
                  <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={1.5} onClick={handleCardClick} style={{ cursor: "pointer" }}>
                      <ComplexStatisticsCard
                        icon="layers"
                        title={<h3 style={{ fontSize: '24px', fontFamily: 'Poppins, sans-serif' }}>Billets</h3>}
                        percentage={{
                          amount: (
                            <div style={{ fontFamily: 'Poppins, sans-serif'}}>
                           <div style={{ paddingBottom: '1px' }}>
                              Approval Pending: {42}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Dispatch Pending: {22}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Processing: {20}
                            </div>
                            <br />
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1px' ,fontSize:'12px'}}>
                    <div style={{ textAlign: 'left', flex: 1 }}>
                      <div>Quantity&nbsp;&nbsp;</div>
                      <div>400</div>
                    </div>
                    <div style={{ textAlign: 'center', flex: 1 }}>
                      <div>Dispatch&nbsp;&nbsp;</div>
                      <div>20%</div>
                    </div>
                    <div style={{ textAlign: 'center', flex: 1 }}>
                      <div>Balance&nbsp;&nbsp;</div>
                      <div>24000</div>
                    </div>
                    <div style={{ textAlign: 'right', flex: 1 }}>
                      <div>AvgRate</div>
                      <div>4000</div>
                    </div>
                  </div>
                          </div>
                          ), 
                        }}
                      />
                    </MDBox>
                  </Grid>
                </div>
              </SwiperSlide>
            )}
            {filterDivisions("Sponze Mix") && (
              <SwiperSlide>
                <div className="card-container">
                  <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={1.5} onClick={handleCardClick} style={{ cursor: "pointer" }}>
                      <ComplexStatisticsCard
                       icon='blur_on'
                        title={<h3 style={{ fontSize: '24px', fontFamily: 'Poppins, sans-serif' }}>Sponze Mix</h3>}
                        percentage={{
                          amount: (
                            <div style={{ fontFamily: 'Poppins, sans-serif'}}>
                           <div style={{ paddingBottom: '1px' }}>
                              Approval Pending: {42}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Dispatch Pending: {22}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Processing: {20}
                            </div>
                            <br />
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1px' ,fontSize:'12px'}}>
                    <div style={{ textAlign: 'left', flex: 1 }}>
                      <div>Quantity&nbsp;&nbsp;</div>
                      <div>400</div>
                    </div>
                    <div style={{ textAlign: 'center', flex: 1 }}>
                      <div>Dispatch&nbsp;&nbsp;</div>
                      <div>20%</div>
                    </div>
                    <div style={{ textAlign: 'center', flex: 1 }}>
                      <div>Balance&nbsp;&nbsp;</div>
                      <div>24000</div>
                    </div>
                    <div style={{ textAlign: 'right', flex: 1 }}>
                      <div>AvgRate</div>
                      <div>4000</div>
                    </div>
                  </div>
                          </div>
                          ), 
                        }}
                      />
                    </MDBox>
                  </Grid>
                </div>
              </SwiperSlide>
            )}
            {filterDivisions("Iron") && (
              <SwiperSlide>
                <div className="card-container">
                  <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={1.5} onClick={handleCardClick} style={{ cursor: "pointer" }}>
                      <ComplexStatisticsCard
                        icon="horizontal_split"
                        title={<h3 style={{ fontSize: '24px', fontFamily: 'Poppins, sans-serif' }}>Iron</h3>}
                        percentage={{
                          amount: (
                            <div style={{ fontFamily: 'Poppins, sans-serif'}}>
                           <div style={{ paddingBottom: '1px' }}>
                              Approval Pending: {42}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Dispatch Pending: {22}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Processing: {20}
                            </div>
                            <br />
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1px' ,fontSize:'12px'}}>
                    <div style={{ textAlign: 'left', flex: 1 }}>
                      <div>Quantity&nbsp;&nbsp;</div>
                      <div>400</div>
                    </div>
                    <div style={{ textAlign: 'center', flex: 1 }}>
                      <div>Dispatch&nbsp;&nbsp;</div>
                      <div>20%</div>
                    </div>
                    <div style={{ textAlign: 'center', flex: 1 }}>
                      <div>Balance&nbsp;&nbsp;</div>
                      <div>24000</div>
                    </div>
                    <div style={{ textAlign: 'right', flex: 1 }}>
                      <div>AvgRate</div>
                      <div>4000</div>
                    </div>
                  </div>
                          </div>
                          ), 
                        }}
                      />
                    </MDBox>
                  </Grid>
                </div>
              </SwiperSlide>
            )}
           {filterDivisions("Coal") && (
  <SwiperSlide>
    <div className="card-container">
      <Grid item xs={12} md={6} lg={3}>
        <MDBox mb={1.5} onClick={handleCardClick} style={{ cursor: "pointer" }}>
          <ComplexStatisticsCard
            icon="whatshot"
            title={<h3 style={{ fontSize: '24px', fontFamily: 'Poppins, sans-serif' }}>Coal</h3>}
            percentage={{
              amount: (
                <div style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <div style={{ paddingBottom: '1px' }}>
                    Approval Pending: {42}
                  </div>
                  <br />
                  <div style={{ paddingBottom: '1px' }}>
                    Dispatch Pending: {22}
                  </div>
                  <br />
                  <div style={{ paddingBottom: '1px' }}>
                    Processing: {20}
                  </div>
                  <br />
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1px' ,fontSize:'12px'}}>
                    <div style={{ textAlign: 'left', flex: 1 }}>
                      <div>Quantity&nbsp;&nbsp;</div>
                      <div>400</div>
                    </div>
                    <div style={{ textAlign: 'center', flex: 1 }}>
                      <div>Dispatch&nbsp;&nbsp;</div>
                      <div>20%</div>
                    </div>
                    <div style={{ textAlign: 'center', flex: 1 }}>
                      <div>Balance&nbsp;&nbsp;</div>
                      <div>24000</div>
                    </div>
                    <div style={{ textAlign: 'right', flex: 1 }}>
                      <div>AvgRate</div>
                      <div>4000</div>
                    </div>
                  </div>
                </div>
              ),
            }}
          />
        </MDBox>
      </Grid>
    </div>
  </SwiperSlide>
)}

            </Swiper>
        </div>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
          </Grid>
        </MDBox>
        <MDBox mt={4.5}>
<Grid container spacing={3} id="projectsAndOrdersOverview">
      {/* Render Projects and OrdersOverview based on state */}
      {showProjectsAndOrders && (
      <>
      <Grid item xs={12} md={6} lg={8}>
      <Projects />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
      <OrdersOverview />
      </Grid>
      </>
      )}
      </Grid>
</MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Pending;
