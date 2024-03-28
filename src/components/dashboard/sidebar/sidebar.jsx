"use client";
import React, { useState, useEffect } from "react";
import MenuLink from "./menuLink/menuLink.jsx";
import Image from "next/image";
import {
  MdDashboard,
  MdMapsHomeWork,
  MdSupervisedUserCircle,
  MdShoppingBag,
} from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import styles from "./sidebar.module.css";
import { FaBars } from "react-icons/fa";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Admins",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Roles and Permission",
        path: "/dashboard/rolesandpermission",
        icon: <MdShoppingBag />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Owners",
        path: "/dashboard/owners",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Properties",
        path: "dashboard/properties",
        icon: <MdMapsHomeWork />,
      },
    ],
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container fluid className={styles.sidebarContainer}>
      <Row className="mb-2">
        <Col xs={12} className="d-flex align-self-start d-md-none">
          <Button
            variant="primary"
            onClick={() => setIsOpen(!isOpen)}
            className={styles.menuButton}
          >
            <FaBars />
          </Button>
        </Col>
      </Row>
      <Row
        className={`mb-4 ${styles.userProfile} ${isOpen ? "d-flex" : "d-none d-md-flex"}`}
      >
        <Col xs={12} className="d-flex">
          <Image
            src="/noavatar.png"
            alt="image"
            width="50"
            height="50"
            className={styles.userImage}
          />
          <div className="ms-3">
            <div className={`fw-bold ${styles.userName}`}>John Joe</div>
            <div className={styles.userRole}>Administrator</div>
          </div>
        </Col>
      </Row>
      <ListGroup
        variant="flush"
        className={`${isOpen ? "d-block" : "d-none d-md-block"}`}
      >
        {menuItems.map((category, idx) => (
          <ListGroup.Item key={idx} className={styles.listGroupItem}>
            <div className="fw-bold mb-2">{category.title}</div>
            {category.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Sidebar;
