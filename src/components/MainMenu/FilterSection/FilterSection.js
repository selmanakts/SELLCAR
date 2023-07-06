import React, { useState } from "react";
import { Card, Form, FormGroup, Input, Collapse } from "reactstrap";
import "./FilterSection.css";

const FilterSection = ({
  searchPrice,
  setSearchPrice,
  searchYear,
  setSearchYear,
  searchPlace,
  setSearchPlace,
  searchGearType,
  setSearchGearType,
  searchfuelType,
  setSearchfuelType,
  searchkilometer,
  setSearchkilometer,
  searchCaseType,
  setSearchCaseType,
  searchColor,
  setSearchColor,
  searchChangingAndPaint,
  setSearchChangingAndPaint,
  searchTraction,
  setSearchTraction,
  searchEngineCapacity,
  setSearchEngineCapacity,
  searchMotorPower,
  setSearchMotorPower,
  searchFromWho,
  setSearchFromWho,
  searchDate,
  setSearchDate,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [isOpen2, setIsOpen2] = useState(false);
  const toggle2 = () => setIsOpen2(!isOpen2);
  const [isOpen3, setIsOpen3] = useState(false);
  const toggle3 = () => setIsOpen3(!isOpen3);
  const toggle4 = () => setIsOpen4(!isOpen4);
  const [isOpen4, setIsOpen4] = useState(false);
  const toggle5 = () => setIsOpen5(!isOpen5);
  const [isOpen5, setIsOpen5] = useState(false);
  const toggle6 = () => setIsOpen6(!isOpen6);
  const [isOpen6, setIsOpen6] = useState(false);
  const toggle7 = () => setIsOpen7(!isOpen7);
  const [isOpen7, setIsOpen7] = useState(false);
  const toggle8 = () => setIsOpen8(!isOpen8);
  const [isOpen8, setIsOpen8] = useState(false);
  const toggle9 = () => setIsOpen9(!isOpen9);
  const [isOpen9, setIsOpen9] = useState(false);
  const toggle10 = () => setIsOpen10(!isOpen10);
  const [isOpen10, setIsOpen10] = useState(false);
  const toggle11 = () => setIsOpen11(!isOpen11);
  const [isOpen11, setIsOpen11] = useState(false);
  const toggle12 = () => setIsOpen12(!isOpen12);
  const [isOpen12, setIsOpen12] = useState(false);
  const toggle13 = () => setIsOpen13(!isOpen13);
  const [isOpen13, setIsOpen13] = useState(false);

  return (
    <div
      style={{
        width: "186px",
      }}
    >
      <div
        style={{
          border: "1px solid #ebebeb",
          backgroundColor: "#ffffff",
          cursor: "pointer",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        <div
          style={{ marginLeft: "15px", fontWeight: "bold" }}
          onClick={toggle}
        >
          Fiyat
        </div>
        <Collapse isOpen={isOpen} style={{ padding: "10px" }}>
          <Input
            type="text"
            value={searchPrice}
            onChange={(e) => setSearchPrice(e.target.value)}
          />
        </Collapse>
      </div>
      <div
        style={{
          border: "1px solid #ebebeb",
          backgroundColor: "#ffffff",
          cursor: "pointer",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        <div
          style={{ marginLeft: "15px", fontWeight: "bold" }}
          onClick={toggle}
        >
          Adres
        </div>

        <Input
          className="mb-3"
          type="text"
          value={searchPlace}
          onChange={(e) => setSearchPlace(e.target.value)}
        />
      </div>
      <div
        style={{
          border: "1px solid #ebebeb",
          backgroundColor: "#ffffff",
          cursor: "pointer",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        <div
          style={{ marginLeft: "15px", fontWeight: "bold" }}
          onClick={toggle2}
        >
          Yıl
        </div>
        <Collapse isOpen={isOpen2} style={{ padding: "10px" }}>
          <Input
            className="mb-3"
            type="text"
            value={searchYear}
            onChange={(e) => setSearchYear(e.target.value)}
          />
        </Collapse>
      </div>
      <div
        style={{
          border: "1px solid #ebebeb",
          backgroundColor: "#ffffff",
          cursor: "pointer",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        <div
          style={{ marginLeft: "15px", fontWeight: "bold" }}
          onClick={toggle3}
        >
          Vites Tipi
        </div>
        <Collapse isOpen={isOpen3} style={{ padding: "10px" }}>
          <Input
            className="mb-3"
            type="select"
            value={searchGearType}
            onChange={(e) => setSearchGearType(e.target.value)}
          >
            <option>Düz</option>
            <option>Otomatik</option>
            <option>Yarı Otomatik</option>
          </Input>
        </Collapse>
      </div>
      <div
        style={{
          border: "1px solid #ebebeb",
          backgroundColor: "#ffffff",
          cursor: "pointer",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        <div
          style={{ marginLeft: "15px", fontWeight: "bold" }}
          onClick={toggle4}
        >
          Yakıt Tipi
        </div>
        <Collapse isOpen={isOpen4} style={{ padding: "10px" }}>
          <Input
            className="mb-3"
            type="select"
            value={searchfuelType}
            onChange={(e) => setSearchfuelType(e.target.value)}
          >
            <option>Benzin</option>
            <option>Dizel</option>
            <option>Elektrik</option>
            <option>Hibrit</option>
            <option>LPG ve Benzin</option>
          </Input>
        </Collapse>
      </div>
      <div
        style={{
          border: "1px solid #ebebeb",
          backgroundColor: "#ffffff",
          cursor: "pointer",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        <div
          style={{ marginLeft: "15px", fontWeight: "bold" }}
          onClick={toggle5}
        >
          Kilometre
        </div>
        <Collapse isOpen={isOpen5} style={{ padding: "10px" }}>
          <Input
            className="mb-3"
            type="text"
            value={searchkilometer}
            onChange={(e) => setSearchkilometer(e.target.value)}
          />
        </Collapse>
      </div>
      <div
        style={{
          border: "1px solid #ebebeb",
          backgroundColor: "#ffffff",
          cursor: "pointer",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        <div
          style={{ marginLeft: "15px", fontWeight: "bold" }}
          onClick={toggle6}
        >
          Kasa Tipi
        </div>
        <Collapse isOpen={isOpen6} style={{ padding: "10px" }}>
          <Input
            className="mb-3"
            type="select"
            value={searchCaseType}
            onChange={(e) => setSearchCaseType(e.target.value)}
          >
            <option>Cabrio</option>
            <option>Coupe</option>
            <option>Hatchback/3</option>
            <option>Hatchback/5</option>
            <option>Jip</option>
            <option>MPV</option>
            <option>Pick-up</option>
            <option>Roadster</option>
            <option>Sedan</option>
            <option>Station wagon</option>
            <option>SUV</option>
          </Input>
        </Collapse>
      </div>
      <div
        style={{
          border: "1px solid #ebebeb",
          backgroundColor: "#ffffff",
          cursor: "pointer",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        <div
          style={{ marginLeft: "15px", fontWeight: "bold" }}
          onClick={toggle7}
        >
          Color
        </div>
        <Collapse isOpen={isOpen7} style={{ padding: "10px" }}>
          <Input
            className="mb-3"
            type="select"
            value={searchColor}
            onChange={(e) => setSearchColor(e.target.value)}
          >
            <option>altın</option>
            <option>bej</option>
            <option>beyaz</option>
            <option>bordo</option>
            <option>füme</option>
            <option>gri</option>
            <option>gri(gümüş)</option>
            <option>gri(metalik)</option>
            <option>gri(itanium)</option>
            <option>kahverengi</option>
            <option>kırmızı</option>
            <option>lacivert</option>
            <option>mavi</option>
            <option>mavi(metalik)</option>
            <option>mor</option>
            <option>pembe</option>
            <option>şampanya</option>
            <option>sarı</option>
            <option>siyah</option>
            <option>turkuaz</option>
            <option>green</option>
            <option>turuncu</option>
            <option>yeşil</option>
            <option>yeşil(metalik)</option>
            <option>diğer</option>
          </Input>
        </Collapse>
      </div>
      <div
        style={{
          border: "1px solid #ebebeb",
          backgroundColor: "#ffffff",
          cursor: "pointer",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        <div
          style={{ marginLeft: "15px", fontWeight: "bold" }}
          onClick={toggle8}
        >
          Hasar Bilgisi
        </div>
        <Collapse isOpen={isOpen8} style={{ padding: "10px" }}>
          <Input
            className="mb-3"
            type="select"
            value={searchChangingAndPaint}
            onChange={(e) => setSearchChangingAndPaint(e.target.value)}
          >
            <option>Ağır Hasarlı</option>
            <option>Belirtilmemiş</option>
            <option>Boyasız ve Değişensiz</option>
            <option>Değişensiz</option>
            <option>Tramersiz</option>
          </Input>
        </Collapse>
      </div>
      <div
        style={{
          border: "1px solid #ebebeb",
          backgroundColor: "#ffffff",
          cursor: "pointer",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        <div
          style={{ marginLeft: "15px", fontWeight: "bold" }}
          onClick={toggle9}
        >
          Çekiş
        </div>
        <Collapse isOpen={isOpen9} style={{ padding: "10px" }}>
          <Input
            className="mb-3"
            type="select"
            value={searchTraction}
            onChange={(e) => setSearchTraction(e.target.value)}
          >
            <option>4WD (Sürekli)</option>
            <option>Arkadan İtiş</option>
            <option>AWD (Elektronik)</option>
            <option>Önden Çekiş</option>
          </Input>
        </Collapse>
      </div>
      <div
        style={{
          border: "1px solid #ebebeb",
          backgroundColor: "#ffffff",
          cursor: "pointer",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        <div
          style={{ marginLeft: "15px", fontWeight: "bold" }}
          onClick={toggle10}
        >
          Motor Hacmi
        </div>
        <Collapse isOpen={isOpen10} style={{ padding: "10px" }}>
          <Input
            className="mb-3"
            type="text"
            value={searchEngineCapacity}
            onChange={(e) => setSearchEngineCapacity(e.target.value)}
          />
        </Collapse>
      </div>
      <div
        style={{
          border: "1px solid #ebebeb",
          backgroundColor: "#ffffff",
          cursor: "pointer",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        <div
          style={{ marginLeft: "15px", fontWeight: "bold" }}
          onClick={toggle11}
        >
          Motor Gücü
        </div>
        <Collapse isOpen={isOpen11} style={{ padding: "10px" }}>
          <Input
            className="mb-3"
            type="text"
            value={searchMotorPower}
            onChange={(e) => setSearchMotorPower(e.target.value)}
          />
        </Collapse>
      </div>
      <div
        style={{
          border: "1px solid #ebebeb",
          backgroundColor: "#ffffff",
          cursor: "pointer",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        <div
          style={{ marginLeft: "15px", fontWeight: "bold" }}
          onClick={toggle12}
        >
          İlan Sahibi
        </div>
        <Collapse isOpen={isOpen12} style={{ padding: "10px" }}>
          <Input
            className="mb-3"
            type="select"
            value={searchFromWho}
            onChange={(e) => setSearchFromWho(e.target.value)}
          >
            <option>Sahibinden</option>
            <option>Galeriden</option>
            <option>Yetkili Bayiden</option>
          </Input>
        </Collapse>
      </div>
      <div
        style={{
          border: "1px solid #ebebeb",
          backgroundColor: "#ffffff",
          cursor: "pointer",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        <div
          style={{ marginLeft: "15px", fontWeight: "bold" }}
          onClick={toggle13}
        >
          İlan Tarihi
        </div>
        <Collapse isOpen={isOpen13} style={{ padding: "10px" }}>
          <Input
            className="mb-3"
            type="text"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
          />
        </Collapse>
      </div>
    </div>
  );
};

export default FilterSection;
