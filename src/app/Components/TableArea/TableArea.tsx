"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import { HiOutlineDocumentDownload } from "react-icons/hi";

export default function TableArea() {
  const TabItems = [
    { value: "all", label: "All Deals", count: 40 },
    { value: "high", label: "High Priority", count: 20 },
    { value: "medium", label: "Medium Priority", count: 20 },
    { value: "low", label: "Low Priority", count: 20 },
  ];

  const [activeTab, setActiveTab] = useState("all");

  return (
    <Card className="shadow-none m-6">
      <div className="p-8">
        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value)}
          className="mb-6 w-full"
        >
          <div className="flex items-center justify-between mb-4 max-md:flex-col max-lg:gap-2 max-sm:items-start">
            <TabsList className="h-10 max-sm:flex max-sm:flex-col max-sm:h-[132px] max-sm:w-full">
              {TabItems.map((tab, index) => (
                <TabsTrigger
                  key={index}
                  value={tab.value}
                  className={`flex items-center gap-2 h-8 rounded-md transition-all ${
                    activeTab === tab.value
                      ? "bg-primary text-white max-sm:w-full"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab(tab.value)}
                >
                  <span>{tab.label}</span>
                  <span
                  className={`size-5 rounded-full ${activeTab === tab.value ? "text-primary" : "text-gray-600"} text-[11px]`}
                  >
                    {tab.count}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
            <Button>
              <HiOutlineDocumentDownload className="size-4" />
              <span>Download as CSV</span>
            </Button>
          </div>

          {TabItems.map((tab) => (
            <TabsContent
            key={tab.value}
            value={tab.value}
            className={`w-full mt-9`}
            >
              {activeTab === tab.value && (
                //--table
                <span className="font-semibold capitalize">{tab.value}</span>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
      {/* --Pagination-- */}
    </Card>
  );
}
