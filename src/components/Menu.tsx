"use client"
import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = ({isOpen}) => {
  const [selectedItem, setSelectedItem] = useState("");
  return (
    <div className="mt-4 text-sm  scrollbaroverflow overflow-y-auto  overflow-scroll  max-h-[85vh] px-2  pb-4">
      {menuItems.map((i) => (
        <div key={i.title} className="flex flex-col gap-2">
          <span className="hidden lg:block text-gray-400 font-light my-4">{i.title}</span>
          {i.items.map(item=>{
             if(item.visible.includes(role)){
              return(
                <Link
                href={item.href}
                // href={"#"}
                key={item.label}
                className={`group flex items-center justify-center lg:justify-start gap-4 text-gray-500 p-2 ml-2  ${selectedItem === item.label && 'bg-primary text-white rounded-md' } hover:bg-primary hover:rounded-md hover:text-white  hover:text-md hover:scale-105 transition-transform duration-200`}
                onClick={() => setSelectedItem(item.label)}
              >
                <Image
                  src={item.icon}
                  width={20}
                  height={20}
                  alt={item.icon}
                  className={`group-hover:invert group-hover:brightness-0 group-hover:contrast-200 group-hover:scale-110 transition-transform duration-200 ${selectedItem === item.label && 'invert brightness-0' }`}
                />
                <span className={`hidden ${isOpen ? "hidden" : "lg:block"}`}>
                  {item.label}
                </span>
              </Link>
              )
             }
            })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
