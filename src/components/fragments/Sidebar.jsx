import { useState } from 'react';
import { Card, Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip, Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import { PresentationChartBarIcon, ShoppingBagIcon, UserCircleIcon, Cog6ToothIcon, InboxIcon, PowerIcon } from '@heroicons/react/24/solid';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

import logo from '../../assets/image8.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  //   return (
  const [open, setOpen] = useState(0);

  return (
    <div className="w-full max-w-[270px] pb-4  shadow-xl shadow-blue-gray-900/5 h-[100vh] flex flex-col items-center gap-[2.6rem]">
      <img
        src={logo}
        alt="logo"
        className="w-[6rem] h-[6rem]"
      />
      <div className={`w-[250px] h-[60px]text-center flex items-center justify-center rounded-tl-[10px] rounded-tr-none rounded-br-none rounded-bl-none hover:cursor-pointer hover:text-white hover:bg-biruLaut hover:font-bold`}>
        <Link to={'#'}>coba 1</Link>
      </div>
    </div>
  );
  // return (
  //   <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
  //     <div className="p-4 mb-2">
  //       <Typography
  //         variant="h5"
  //         color="blue-gray"
  //       >
  //         Sidebar
  //       </Typography>
  //     </div>
  //     <List>
  //       <Accordion
  //         open={open === 1}
  //         icon={
  //           <ChevronDownIcon
  //             strokeWidth={2.5}
  //             className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? 'rotate-180' : ''}`}
  //           />
  //         }
  //       >
  //         <ListItem
  //           className="p-0"
  //           selected={open === 1}
  //         >
  //           <AccordionHeader
  //             onClick={() => handleOpen(1)}
  //             className="p-3 border-b-0"
  //           >
  //             <ListItemPrefix>
  //               <PresentationChartBarIcon className="w-5 h-5" />
  //             </ListItemPrefix>
  //             <Typography
  //               color="blue-gray"
  //               className="mr-auto font-normal"
  //             >
  //               Dashboard
  //             </Typography>
  //           </AccordionHeader>
  //         </ListItem>
  //         <AccordionBody className="py-1">
  //           <List className="p-0">
  //             <ListItem>
  //               <ListItemPrefix>
  //                 <ChevronRightIcon
  //                   strokeWidth={3}
  //                   className="w-5 h-3"
  //                 />
  //               </ListItemPrefix>
  //               Analytics
  //             </ListItem>
  //             <ListItem>
  //               <ListItemPrefix>
  //                 <ChevronRightIcon
  //                   strokeWidth={3}
  //                   className="w-5 h-3"
  //                 />
  //               </ListItemPrefix>
  //               Reporting
  //             </ListItem>
  //             <ListItem>
  //               <ListItemPrefix>
  //                 <ChevronRightIcon
  //                   strokeWidth={3}
  //                   className="w-5 h-3"
  //                 />
  //               </ListItemPrefix>
  //               Projects
  //             </ListItem>
  //           </List>
  //         </AccordionBody>
  //       </Accordion>
  //       <Accordion
  //         open={open === 2}
  //         icon={
  //           <ChevronDownIcon
  //             strokeWidth={2.5}
  //             className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? 'rotate-180' : ''}`}
  //           />
  //         }
  //       >
  //         <ListItem
  //           className="p-0"
  //           selected={open === 2}
  //         >
  //           <AccordionHeader
  //             onClick={() => handleOpen(2)}
  //             className="p-3 border-b-0"
  //           >
  //             <ListItemPrefix>
  //               <ShoppingBagIcon className="w-5 h-5" />
  //             </ListItemPrefix>
  //             <Typography
  //               color="blue-gray"
  //               className="mr-auto font-normal"
  //             >
  //               E-Commerce
  //             </Typography>
  //           </AccordionHeader>
  //         </ListItem>
  //         <AccordionBody className="py-1">
  //           <List className="p-0">
  //             <ListItem>
  //               <ListItemPrefix>
  //                 <ChevronRightIcon
  //                   strokeWidth={3}
  //                   className="w-5 h-3"
  //                 />
  //               </ListItemPrefix>
  //               Orders
  //             </ListItem>
  //             <ListItem>
  //               <ListItemPrefix>
  //                 <ChevronRightIcon
  //                   strokeWidth={3}
  //                   className="w-5 h-3"
  //                 />
  //               </ListItemPrefix>
  //               Products
  //             </ListItem>
  //           </List>
  //         </AccordionBody>
  //       </Accordion>
  //       <ListItem>
  //         <ListItemPrefix>
  //           <InboxIcon className="w-5 h-5" />
  //         </ListItemPrefix>
  //         Inbox
  //         <ListItemSuffix>
  //           <Chip
  //             value="14"
  //             size="sm"
  //             variant="ghost"
  //             color="blue-gray"
  //             className="rounded-full"
  //           />
  //         </ListItemSuffix>
  //       </ListItem>
  //       <ListItem>
  //         <ListItemPrefix>
  //           <UserCircleIcon className="w-5 h-5" />
  //         </ListItemPrefix>
  //         Profile
  //       </ListItem>
  //       <ListItem>
  //         <ListItemPrefix>
  //           <Cog6ToothIcon className="w-5 h-5" />
  //         </ListItemPrefix>
  //         Settings
  //       </ListItem>
  //       <ListItem>
  //         <ListItemPrefix>
  //           <PowerIcon className="w-5 h-5" />
  //         </ListItemPrefix>
  //         Log Out
  //       </ListItem>
  //     </List>
  //   </Card>
  // );
};

export default Sidebar;

/**w-[250px] h-[60px] absolute top-[162px] left-[10px] gap-0 rounded-tl-[10px] rounded-tr-none rounded-br-none rounded-bl-none opacity-0 */
