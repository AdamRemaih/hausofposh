import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Christmas rental images
import blackReindeerProps from "@/assets/rentals/christmas/black-reindeer-props.jpg";
import blackSled from "@/assets/rentals/christmas/black-sled.jpg";
import candyCaneProp from "@/assets/rentals/christmas/candy-cane-prop.jpg";
import christmasBench from "@/assets/rentals/christmas/christmas-bench.jpg";
import christmasCartProp from "@/assets/rentals/christmas/christmas-cart-prop.jpg";
import christmasGift from "@/assets/rentals/christmas/christmas-gift.jpg";
import christmasSled from "@/assets/rentals/christmas/christmas-sled.jpg";
import christmasBackdrop from "@/assets/rentals/christmas/christmas-backdrop.jpg";
import christmasSmallGift from "@/assets/rentals/christmas/christmas-small-gift.jpg";
import gingerbreadTree from "@/assets/rentals/christmas/gingerbread-tree.jpg";
import nutcrackerMan from "@/assets/rentals/christmas/nutcracker-man.jpg";
import christmasOrnament from "@/assets/rentals/christmas/christmas-ornament.jpg";
import redGoldThrone from "@/assets/rentals/christmas/red-gold-throne.jpg";
import santaLetterBox from "@/assets/rentals/christmas/santa-letter-box.jpg";
import santaBakerProp from "@/assets/rentals/christmas/santa-baker-prop.jpg";
import smallRedSled from "@/assets/rentals/christmas/small-red-sled.jpg";
import welcomeSantaSign from "@/assets/rentals/christmas/welcome-santa-sign.jpg";
import whiteNutcracker from "@/assets/rentals/christmas/white-nutcracker.jpg";
import gingerBreadMan from "@/assets/rentals/christmas/Ginger_Bread_Man.jpg";
import peppermintProp from "@/assets/rentals/christmas/peppermintProp.jpg";
import christmasMetalArch from "@/assets/rentals/christmas/Christmas_Metal_Arch.jpg";

// Wedding rental images
import goldCenterpiece from "@/assets/rentals/weddings/gold-centerpiece.jpg";
import silverCenterpiece from "@/assets/rentals/weddings/silver-centerpiece.jpg";
import tallBlackCenterpiece from "@/assets/rentals/weddings/tall-black-centerpiece.jpg";
import tallAcrylicCenterpiece from "@/assets/rentals/weddings/tall-acrylic-centerpiece.jpg";
import tallGoldCenterpiece from "@/assets/rentals/weddings/tall-gold-centerpiece.jpg";
import candelabraCenterpiece from "@/assets/rentals/weddings/candelabra-centerpiece.jpg";
import roundGoldCenterpiece from "@/assets/rentals/weddings/round-gold-centerpiece.jpg";
import floatingCandleTrio from "@/assets/rentals/weddings/floating-candle-trio.jpg";
import candleWreathCenterpiece from "@/assets/rentals/weddings/candle-wreath-centerpiece.jpg";
import tableChandelierCenterpiece from "@/assets/rentals/weddings/table-chandelier-centerpiece.jpg";
import roseInGlassDomeCenterpiece from "@/assets/rentals/weddings/RoseInGlassDome.jpg";
import whiteFloralVaseCenterpiece from "@/assets/rentals/weddings/WhiteFloralVase.jpg";
import cakeTables3Sizes from "@/assets/rentals/weddings/cake-tables-3-sizes.jpg";
import vorageCakeTable from "@/assets/rentals/weddings/vorage-cake-table.jpg";
import whiteRippleCakeTable from "@/assets/rentals/weddings/WhiteRippleCakeTable.jpeg";
import chairCoverBlack from "@/assets/rentals/weddings/chair-cover-black.jpg";
import chairCoverWhite from "@/assets/rentals/weddings/chair-cover-white.jpg";
import chairSash from "@/assets/rentals/weddings/chair-sash.jpg";
import angledGoldWhiteChairs from "@/assets/rentals/weddings/angled-gold-white-chairs.jpg";
import blackSilverChairs from "@/assets/rentals/weddings/black-silver-chairs.jpg";
import blackSilverSet from "@/assets/rentals/weddings/black-silver-set.jpg";
import greenLoveseat from "@/assets/rentals/weddings/green-loveseat.jpg";
import pinkKidsLoveseat from "@/assets/rentals/weddings/pink-kids-loveseat.jpg";
import redGoldLoveseat from "@/assets/rentals/weddings/red-gold-loveseat.jpg";
import roundGoldWhiteChairs from "@/assets/rentals/weddings/round-gold-white-chairs.jpg";
import scallopWhiteSet from "@/assets/rentals/weddings/scallop-white-set.jpg";
import whiteVelvetLoveseat from "@/assets/rentals/weddings/white-velvet-loveseat.jpg";
import taperGoldCandles from "@/assets/rentals/weddings/Gold_Taper_Candles.jpg";
import taperBlackCandles from "@/assets/rentals/weddings/BlackTaperCandles.jpg";
import hurricaneVases from "@/assets/rentals/weddings/HurricaneVases.jpeg";
import smallVases from "@/assets/rentals/weddings/SmallVases.jpg";
import budVases from "@/assets/rentals/weddings/BudVases.jpg";
import whiteNapkin from "@/assets/rentals/weddings/WhiteNapkin.jpg";
import blackNapkin from "@/assets/rentals/weddings/BlackNapkin.jpg";
import whiteTableCloth from "@/assets/rentals/weddings/WhiteTableCloth.jpeg";
import blackTableCloth from "@/assets/rentals/weddings/BlackTableCloth.jpeg";
import redTableCloth from "@/assets/rentals/weddings/RedTableCloth.jpeg";
import goldLeavesChargerPlate from "@/assets/rentals/weddings/Gold_Leaves_ChargerPlates.jpg";
import goldBeadedChargerPlate from "@/assets/rentals/weddings/GoldBeadedTrimChargerPlates.jpg";
import silverChargerPlate from "@/assets/rentals/weddings/SilverBeadedChargerPlate.jpeg";
import roseGoldChargerPlate from "@/assets/rentals/weddings/RoseGoldBeadedTrimChargerPlate.jpg";
import satinGoldTableRunner from "@/assets/rentals/weddings/SatinGoldTableRunner.jpg";
import satinHotPinkTableRunner from "@/assets/rentals/weddings/SatinHotPinkTableRunner.jpg";
import satinlightBlueTableRunner from "@/assets/rentals/weddings/SatinLightBlueTableRunner.jpg";
import chiffonTableRunnerBlush from "@/assets/rentals/weddings/ChiffonTableRunnerBlush.jpeg";
import chiffonTableRunnerChampagne from "@/assets/rentals/weddings/ChiffonTableRunnerChampagne.jpeg";
import chiffonTableRunnerDustyBlue from "@/assets/rentals/weddings/ChiffonTableRunnerDustyBlue.jpeg";
import chiffonTableRunnerTerracottaOrange from "@/assets/rentals/weddings/ChiffonTableRunnerTerracottaOrange.jpg";
import velvetEmeraldGreenTableRunner from "@/assets/rentals/weddings/VelvetEmeraldGreenTableRunner.jpg";
import velvetRoyalBlueTableRunner from "@/assets/rentals/weddings/VelvetRoyalBlueTableRunner.jpg";
import sequinRoseGoldTableRunner from "@/assets/rentals/weddings/SequinRoseGoldTableRunner.jpg";
import sequinGoldTableRunner from "@/assets/rentals/weddings/SequinGoldTableRunner.jpg";
import sequinSilverTableRunner from "@/assets/rentals/weddings/SequinSilverTableRunner.jpg";
import navyBlueCocktailTableCover from "@/assets/rentals/weddings/NavyBlueCocktailTableCover.jpeg";
import blackCocktailTableCover from "@/assets/rentals/weddings/BlackCocktailTableCover.jpeg";
import whiteCocktailTableCover from "@/assets/rentals/weddings/WhiteCocktailTableCover.jpeg";
import pinkFloral from "@/assets/rentals/weddings/PinkFloral.jpg";
import whiteFloral from "@/assets/rentals/weddings/WhiteFloral.jpg";
import silverAndWhiteKingsThrone from "@/assets/rentals/weddings/SilverAndWhiteKingsThrone.jpg";
import whiteKingsThrone from "@/assets/rentals/weddings/WhiteKingsThrone.jpg";


// Catering / Dessert
import assortedChafingDishes from "@/assets/rentals/CateringAndDessert/AssortedChafingDishes.jpeg";
import assortedCandyJars from "@/assets/rentals/CateringAndDessert/AssortedCandyJars.jpeg";
import assortedCakeStands from "@/assets/rentals/CateringAndDessert/AssortedCakeStands.jpg";
import assortedTieredStands from "@/assets/rentals/CateringAndDessert/AssortedTieredStands.jpeg";
import largeAssortedTieredStands from "@/assets/rentals/CateringAndDessert/LargeAssortedTieredStands.jpg";
import assortedTrays from "@/assets/rentals/CateringAndDessert/AssortedTrays.jpg";
import cakeCuttingSets from "@/assets/rentals/CateringAndDessert/CakeCuttingSets.jpg";
import whiteRisers from "@/assets/rentals/CateringAndDessert/WhiteAcrylicRisers.jpeg";
import silverRisers from "@/assets/rentals/CateringAndDessert/SilverRisers.jpg";
import mirrorRisers from "@/assets/rentals/CateringAndDessert/MirrorRisers.jpeg";
import coffeeMachine from "@/assets/rentals/CateringAndDessert/CoffeeMachine.jpeg";
import coffeeInsulatedBeverageDispenser from "@/assets/rentals/CateringAndDessert/CoffeeInsulatedBeverageDispenser.jpeg";
import popcornMachine from "@/assets/rentals/CateringAndDessert/PopcornMachine.jpeg";
import donutWall from "@/assets/rentals/CateringAndDessert/DonutWall.jpg";
import clearAcrylicCupcakeStand from "@/assets/rentals/CateringAndDessert/ClearAcrylicCupcakeStand.jpeg";




// Ramadan rental images
import ramadanLanterns from "@/assets/rentals/ramadan/ramadan-lanterns.jpg";
import whiteLanterns from "@/assets/rentals/ramadan/white-lanterns.jpg";
import blackLanterns from "@/assets/rentals/ramadan/BlackLanterns.jpg";
import ramadanKareem from "@/assets/rentals/ramadan/RamadanKareemSign.jpg";
import cresentMoonBackdrop from "@/assets/rentals/ramadan/CresentMoonBackdrop.jpg"


// Birthday rental images
import blueRabbitProp from "@/assets/rentals/birthdays/blue-rabbit-prop.jpg";
import chestProp from "@/assets/rentals/birthdays/chest-prop.jpg";
import donutProp from "@/assets/rentals/birthdays/donut-prop.jpg";
import gingerbreadProp from "@/assets/rentals/birthdays/gingerbread-prop.jpg";
import icecreamProp from "@/assets/rentals/birthdays/icecream-prop.jpg";
import icecreamStool from "@/assets/rentals/birthdays/icecream-stool.jpg";
import macaroonProp from "@/assets/rentals/birthdays/macaroon-prop.jpg";
import mushroomProps from "@/assets/rentals/birthdays/mushroom-props.jpg";
import pinkRabbitProp from "@/assets/rentals/birthdays/pink-rabbit-prop.jpg";
import sheepProps from "@/assets/rentals/birthdays/sheep-props.jpg";
import encantoBackdrop from "@/assets/rentals/birthdays/encanto-backdrop.jpg";
import fairyGardenBackdrop from "@/assets/rentals/birthdays/fairy-garden-backdrop.jpg";
import frozenBackdrop from "@/assets/rentals/birthdays/frozen-backdrop.jpg";
import goldMoonBackdrop from "@/assets/rentals/birthdays/gold-moon-backdrop.jpg";
import jurassicParkBackdrop from "@/assets/rentals/birthdays/jurassic-park-backdrop.jpg";
import mermaidBackdrop from "@/assets/rentals/birthdays/mermaid-backdrop.jpg";
import mickeyFriendsBackdrop from "@/assets/rentals/birthdays/mickey-friends-backdrop.jpg";
import minnieMouseBackdrop from "@/assets/rentals/birthdays/minnie-mouse-backdrop.jpg";
import princessJasmineBackdrop from "@/assets/rentals/birthdays/princess-jasmine-backdrop.jpg";
import zooAnimalsBackdrop from "@/assets/rentals/birthdays/zoo-animals-backdrop.jpg";
import beautyBeastBackdrop from "@/assets/rentals/birthdays/beauty-beast-backdrop.jpg";
import butterflyGardenBackdrop from "@/assets/rentals/birthdays/butterfly-garden-backdrop.jpg";
import cocomelonBackdrop from "@/assets/rentals/birthdays/cocomelon-backdrop.jpg";
import carousalProp from "@/assets/rentals/birthdays/carousal-prop.jpg";
import chanelBackdrop from "@/assets/rentals/birthdays/ChanelBackdrop.jpg";
import purpleBackdrop from "@/assets/rentals/birthdays/PurpleBackdrop.jpg";
import underTheSeaBackdrop from "@/assets/rentals/birthdays/UnderTheSeaBackdrop.jpg";
import spidermanBackdrop from "@/assets/rentals/birthdays/SpidermanBackdrop.jpg";
import olafBackdrop from "@/assets/rentals/birthdays/OlafBackdrop.jpg";
import frozenRoundBackdrop from "@/assets/rentals/birthdays/ForzenRoundBackdrop.jpg";
import gabbysDollhouseThemeBackdrop from "@/assets/rentals/birthdays/GabbysDollhouseThemeBackdrop.jpg";
import dinosaurBackdrop from "@/assets/rentals/birthdays/DinosaurBackdrop.jpg";
import blossomsOfParisBackdrop from "@/assets/rentals/birthdays/BlossomsOfParisBackdrop.jpg";
import woddenBurtterflyProp from "@/assets/rentals/birthdays/WoodenButterflyProp.jpg";
import customBalloonArch from "@/assets/rentals/birthdays/CustomBalloonArch.jpg";
import customBalloonArch2 from "@/assets/rentals/birthdays/CustomBalloonArch2.jpg";
import miniMouseProp from "@/assets/rentals/birthdays/MiniMouseProp.jpg";
import numberOneProp from "@/assets/rentals/birthdays/NumberOneProp.jpg";
import numberSixProp from "@/assets/rentals/birthdays/NumberSixProp.jpg";
import numberTwoProp from "@/assets/rentals/birthdays/NumberTwoProp.jpg";
import smallCherryBlossomTrees from "@/assets/rentals/birthdays/SmallCherryBlossomTrees.jpg";
import extraLargeFoamRoses from "@/assets/rentals/birthdays/ExtraLargeFoamRoses.jpg";
import duckProp from "@/assets/rentals/birthdays/DuckProp.jpg";

// Graduation
import preSchoolGrad from "@/assets/rentals/graduations/PreSchoolGrad.jpg"
import grad from "@/assets/rentals/graduations/Grad.jpg"


// Gender Reveal / Baby Shower

import babyBlocks from "@/assets/rentals/GenderReveal_BabyShower/babyblocks.jpg";
import heOrSheRevealBackdrop from "@/assets/rentals/GenderReveal_BabyShower/HeOrSheBackdrop.jpg";
import BearlyWaitingBabyShowerBackdrop from "@/assets/rentals/GenderReveal_BabyShower/BearlyWaitingBabyShowerBackdrop.jpg"
import babyLetters from "@/assets/rentals/GenderReveal_BabyShower/BabyLetters.jpeg";
import boyOrGirl from "@/assets/rentals/GenderReveal_BabyShower/BoyOrGirl.jpg";


//Lighting And Hardware
import backdropBase from "@/assets/rentals/lightingsAndHardware/BackdropBase.jpeg";
import adjustableUprights from "@/assets/rentals/lightingsAndHardware/AdjustableUprights.jpeg";
import adjustableBackdropCrossbar from "@/assets/rentals/lightingsAndHardware/AdjustableBackdropCrossbar.jpeg";
import stanchions from "@/assets/rentals/lightingsAndHardware/Stanchions.jpeg";
import whiteChandelier from "@/assets/rentals/lightingsAndHardware/WhiteChandelier.jpg";
import goldChandelier from "@/assets/rentals/lightingsAndHardware/GoldChandelier.jpg";
import fairyLights from "@/assets/rentals/lightingsAndHardware/FairyLights.jpeg";
import blackLedCafeLights from "@/assets/rentals/lightingsAndHardware/BlackLEDCafeLights.jpg";
import tenPcGoldHangingLEDLight from "@/assets/rentals/lightingsAndHardware/10PcGoldHangingLedLight.jpg";
import graduated10LEDGoldLightStand from "@/assets/rentals/lightingsAndHardware/Graduated10LEDGoldLightStand.jpg";
import multiColourLEDUplight from "@/assets/rentals/lightingsAndHardware/MultiColourLEDUplight.jpg";
import roundBackdropStand from "@/assets/rentals/lightingsAndHardware/RoundBackdropStand.jpg";
import favorDisplayShelf from "@/assets/rentals/lightingsAndHardware/FavorDisplayShelf.jpg";

//Tables
import serpentineGoldTable from "@/assets/rentals/tables/serpentineGoldTable.jpg";
import serpentineSilverTable from "@/assets/rentals/tables/serpentineSilverTable.jpeg";
import cocktailTable from "@/assets/rentals/tables/CocktailTable.jpeg";
import halfMoonTable from "@/assets/rentals/tables/HalfMoonTable.jpg";
import fourFtTable from "@/assets/rentals/tables/4ft-table.jpg";
import sixFtTable from "@/assets/rentals/tables/6ft-table.jpg";
import fiveFtRoundTable from "@/assets/rentals/tables/5ft-RoundTable.jpeg";
import sevenFtRoundTable from "@/assets/rentals/tables/5ft-RoundTable.jpeg";
import threeTierTable from "@/assets/rentals/tables/3TierTable.jpg";
import silverLongGlassTable from "@/assets/rentals/tables/SilverLongGlassTable.jpg";
import threePcsRectangularGoldTables from "@/assets/rentals/tables/3pcsRectangularGoldTables.jpg";
import ThreePcsRoundGoldDessertTables from "@/assets/rentals/tables/3pcsRoundGoldDessertTables.jpg";
import fivePcsRoundWhiteDessertTables from "@/assets/rentals/tables/5pcsRoundWhiteDessertTables.jpg";
import goldDiamondSideTable from "@/assets/rentals/tables/GoldDiamondSideTable.jpg";
import whiteRectangularTables from "@/assets/rentals/tables/WhiteRectangularTable.webp";
import loveLetters from "@/assets/rentals/tables/LoveLetters.jpeg";


//Signs/Mirrors/Easels
import whiteEasel from "@/assets/rentals/signs_mirrors_easels/WhiteEasel.jpg";
import whiteEasel2 from "@/assets/rentals/signs_mirrors_easels/WhiteEasel2.jpg";
import blackEasel from "@/assets/rentals/signs_mirrors_easels/BlackEasel.jpg";
import goldEasel from "@/assets/rentals/signs_mirrors_easels/GoldEasel.jpg";
import woodEasel from "@/assets/rentals/signs_mirrors_easels/WoodEasel.jpg";
import rustyEasel from "@/assets/rentals/signs_mirrors_easels/RustyEasel.jpg";
import miniEasel from "@/assets/rentals/signs_mirrors_easels/MiniEasel.jpg";
import chalkboard from "@/assets/rentals/signs_mirrors_easels/Chalkboard.jpg";
import boyOrGirlSign from "@/assets/rentals/signs_mirrors_easels/BoyOrGirlSign.jpg";
import missToMrs from "@/assets/rentals/signs_mirrors_easels/MissToMrsSign.jpg";
import blueLetsParty from "@/assets/rentals/signs_mirrors_easels/BlueLetsPartySign.jpg";
import whiteLetsParty from "@/assets/rentals/signs_mirrors_easels/WhiteLetsPartySign.jpg";
import welcomeToOurLoveStorySign from "@/assets/rentals/signs_mirrors_easels/WelcomeToOurLoveStorySign.jpg";
import dreamsDoComeTrueSign from "@/assets/rentals/signs_mirrors_easels/DreamsDoComeTrueSign.jpg";
import ASign from "@/assets/rentals/signs_mirrors_easels/WhiteASign.jpg";
import semiRoundMirror from "@/assets/rentals/signs_mirrors_easels/SemiRoundMirror.jpg";
import mrandMrsSign from "@/assets/rentals/signs_mirrors_easels/Mr&MrsSign.jpg";
import sheSaidYesSign from "@/assets/rentals/signs_mirrors_easels/SheSaidYesSign.jpg";
import willYouMarryMeSign from "@/assets/rentals/signs_mirrors_easels/WillYouMarryMeSign.jpg";
import happilyEverAfterSign from "@/assets/rentals/signs_mirrors_easels/HappilyEverAfterSign.jpg";
import hajjMabrourSign from "@/assets/rentals/signs_mirrors_easels/HajjMabrourSign.jpg";
import brideToBeSign from "@/assets/rentals/signs_mirrors_easels/BrideToBeSign.jpg";
import happyBirthdaySign from "@/assets/rentals/signs_mirrors_easels/HappyBirthdaySign.jpg";
import congratulationsSign from "@/assets/rentals/signs_mirrors_easels/CongratulationsSign.jpg";
import ramadanKareemSign from "@/assets/rentals/signs_mirrors_easels/RamadanKareemSign.jpg";
import betterTogetherSign from "@/assets/rentals/signs_mirrors_easels/BetterTogether.jpg";

// Money Boxes & Table Numbers
import tableNumbers from "@/assets/rentals/moneyBoxes_TableNumbers/TableNumbers.jpg";
import tableNumbers2 from "@/assets/rentals/moneyBoxes_TableNumbers/TableNumbers2.jpg";
import tableNumbers3 from "@/assets/rentals/moneyBoxes_TableNumbers/TableNumbers3.jpg";
import frostedMoneyBox from "@/assets/rentals/moneyBoxes_TableNumbers/FrostedMoneyBox.jpg";
import whiteAcrylicMoneyBox from "@/assets/rentals/moneyBoxes_TableNumbers/WhiteAcrylicMoneyBox.jpg";
import whiteBirdCage from "@/assets/rentals/moneyBoxes_TableNumbers/WhiteBirdCage.jpeg";


interface RentalItem {
  name: string;
  price: string;
  image?: string;
}

interface SubCategory {
  name: string;
  items?: RentalItem[];
  subcategories?: SubCategory[];
}

interface Category {
  name: string;
  subcategories?: SubCategory[];
  items?: RentalItem[];
}

interface SearchResult {
  item: RentalItem;
  category: string;
  path: string[];
}

const rentalCategories: Category[] = [
  {
    name: "Weddings & Engagements",
    subcategories: [
      { name: "Centre Pieces", items: [
        { name: "Gold Floral Centre Piece", price: "From $25", image: goldCenterpiece },
        { name: "Silver Floral Centre Piece", price: "From $25", image: silverCenterpiece },
        { name: "Tall Black Stand Centre Piece", price: "From $55", image: tallBlackCenterpiece },
        { name: "Tall Acrylic Centre Piece", price: "From $55", image: tallAcrylicCenterpiece },
        { name: "Tall Gold Stand Centre Piece", price: "From $110", image: tallGoldCenterpiece },
        { name: "Gold Candelabra Centre Piece", price: "From $55", image: candelabraCenterpiece },
        { name: "Round Gold Hoop Centre Piece", price: "From $55", image: roundGoldCenterpiece },
        { name: "Floating Candle Trio with Greenery", price: "From $45", image: floatingCandleTrio },
        { name: "Candle Wreath Centre Piece", price: "From $55", image: candleWreathCenterpiece },
        { name: "Pink Floral Centre Piece", price: "From $55", image: pinkFloral },
        { name: "White Floral Centre Piece", price: "From $55", image: whiteFloral },
        { name: "Gold Table Chandelier Centre Piece", price: "From $55", image: tableChandelierCenterpiece },
        { name: "Rose In Glass Dome Centre Piece", price: "From $25", image: roseInGlassDomeCenterpiece },
        { name: "White Floral Vase Centre Piece", price: "From $40", image: whiteFloralVaseCenterpiece },
        { name: "Taper Gold Candles", price: "From $20", image: taperGoldCandles },
        { name: "Taper Black Candles", price: "From $20", image: taperBlackCandles },
        { name: "Hurricane Vases", price: "From $8", image: hurricaneVases },
        { name: "Small Vases", price: "From $5", image: smallVases },
        { name: "Bud Vases", price: "From $5", image: budVases },
      ] },
      
      { name: "Cake Tables", items: [
        { name: "Gold Twist Cake Table (3 Sizes)", price: "From $50", image: cakeTables3Sizes },
        { name: "Vorage Gold Cake Table", price: "From $250", image: vorageCakeTable },
        { name: "White Ripple Cake Table", price: "From $400", image: whiteRippleCakeTable },
      ] },
      {
        name: "Chair Covers and Linens",
        subcategories: [
          {
            name: "Chair Covers",
            items: [
              { name: "Black Spandex Chair Cover", price: "From $2", image: chairCoverBlack },
              { name: "White Spandex Chair Cover", price: "From $2", image: chairCoverWhite },
            ]
          },
          {
            name: "Sashes",
            items: [
              { name: "Gold Chair Sash", price: "From $2", image: chairSash }
            ]
          },
          {
            name: "Table Cloths",
            items: [
              { name: "White Table Cloth", price: "From $10", image: whiteTableCloth },
              { name: "Black Table Cloth", price: "From $10", image: blackTableCloth },
              { name: "Red Table Cloth", price: "From $20", image: redTableCloth },
            ]
          },
          {
            name: "Napkins",
            items: [
              { name: "White Napkin", price: "From $1", image: whiteNapkin },
              { name: "Black Napkin", price: "From $1", image: blackNapkin }
            ]
          },
          {
            name: "Table Runners",
            subcategories: [
              {
                name: "Satin",
                items: [
                  { name: "Gold Satin Table Runner", price: "From $5", image: satinGoldTableRunner },
                  { name: "Light Blue Satin Table Runner", price: "From $5", image: satinlightBlueTableRunner },
                  { name: "Hot Pink Satin Table Runner", price: "From $5", image:  satinHotPinkTableRunner},
                ]
              },
              {
                name: "Chiffon",
                items: [
                  { name: "Blush Chiffon Table Runner", price: "From $10", image: chiffonTableRunnerBlush },
                  { name: "Dusty Blue Chiffon Table Runner", price: "From $10", image: chiffonTableRunnerDustyBlue },
                  { name: "Champagne Chiffon Table Runner", price: "From $10", image: chiffonTableRunnerChampagne },
                  { name: "Terracotta Orange Chiffon Table Runner", price: "From $10", image: chiffonTableRunnerTerracottaOrange },
                ]
              },
              {
                name: "Velvet",
                items: [
                  { name: "Emerald Green Velvet Table Runner", price: "From $10", image: velvetEmeraldGreenTableRunner },
                  { name: "Royal Blue Velvet Table Runner", price: "From $10", image: velvetRoyalBlueTableRunner },
                ]
              },
              {
                name: "Sequin",
                items: [
                  { name: "Rose Gold Sequin Table Runner", price: "From $10", image: sequinRoseGoldTableRunner },
                  { name: "Silver Sequin Table Runner", price: "From $10", image:  sequinSilverTableRunner },
                  { name: "Gold Sequin Table Runner", price: "From $10", image: sequinGoldTableRunner },
                ]
              }
            ]
          },
          {
            name: "Cocktail Table Covers",
            items: [
              { name: "White Table Cover", price: "From $10", image: whiteCocktailTableCover },
              { name: "Black Table Cover", price: "From $10", image: blackCocktailTableCover },
              { name: "Navy Blue Table Cover", price: "From $10", image: navyBlueCocktailTableCover }
            ]
          }
        ]
      },
      { name: "Couches and Chairs", items: [
        { name: "Angled Gold & White Chairs", price: "From $100", image: angledGoldWhiteChairs },
        { name: "Black & Silver Chairs", price: "From $100", image: blackSilverChairs },
        { name: "Black & Silver Set", price: "From $250", image: blackSilverSet },
        { name: "Teal Velvet Loveseat", price: "From $150", image: greenLoveseat },
        { name: "Pink Kids Loveseat", price: "From $65", image: pinkKidsLoveseat },
        { name: "Red & Gold Chaise Lounge", price: "From $150", image: redGoldLoveseat },
        { name: "Round Gold & White Chairs", price: "From $100", image: roundGoldWhiteChairs },
        { name: "White Scallop Set", price: "From $300", image: scallopWhiteSet },
        { name: "White Velvet Loveseat", price: "From $150", image: whiteVelvetLoveseat },
        { name: "Silver and White King's Throne", price: "From $175", image: silverAndWhiteKingsThrone },
        { name: "White King's Throne", price: "From $175", image: whiteKingsThrone },
      ] },
      
      { name: "Charger Plates", items: [
        { name: "Gold Leaves Charger Plate", price: "From $1.50", image: goldLeavesChargerPlate },
        { name: "Gold Beaded Trim Charger Plate", price: "From $1.50", image: goldBeadedChargerPlate }, 
        { name: "Silver Charger Plate", price: "From $1.50", image: silverChargerPlate },
        { name: "Rose Gold Beaded Trim Charger Plate", price: "From $2.50", image: roseGoldChargerPlate }
      ] },
      
    ],
  },
  {
    name: "Catering / Dessert",
    items: [
      { name: "Assorted Chafing Dishes", price: "From $20", image: assortedChafingDishes },
      { name: "Assorted Candy Jars", price: "From $10", image: assortedCandyJars },
      { name: "Assorted Cake Stands", price: "From $15", image: assortedCakeStands },
      { name: "Assorted Tiered Stands", price: "From $20", image: assortedTieredStands },
      { name: "Large Assorted Tiered Stands", price: "From $200", image: largeAssortedTieredStands },
      { name: "Assorted Trays", price: "From $15", image: assortedTrays },
      { name: "Cake Cutting Sets", price: "From $10", image: cakeCuttingSets },
      { name: "White Risers", price: "From $10", image: whiteRisers },
      { name: "Silver Risers", price: "From $10", image: silverRisers },
      { name: "Coffee Machine", price: "From $50", image: coffeeMachine },
      { name: "Coffee Insulated Beverage Dispenser", price: "From $50", image: coffeeInsulatedBeverageDispenser },
      { name: "Popcorn Machine", price: "From $150", image: popcornMachine },
      { name: "Donut Wall", price: "From $25", image: donutWall },
      { name: "Clear Acrylic Cupcake Stand", price: "From $20", image: clearAcrylicCupcakeStand },
    ],
  },
  {
    name: "Christmas",
    items: [
      { name: "Black Reindeer Props", price: "From $45", image: blackReindeerProps },
      { name: "Black Sled", price: "From $65", image: blackSled },
      { name: "Candy Cane Prop", price: "From $25", image: candyCaneProp },
      { name: "Merry Christmas Bench", price: "From $75", image: christmasBench },
      { name: "Christmas Cart Prop", price: "From $25", image: christmasCartProp },
      { name: "Christmas Gift Display", price: "From $55", image: christmasGift },
      { name: "Red Christmas Sled", price: "From $85", image: christmasSled },
      { name: "Christmas Floral Backdrop", price: "From $350", image: christmasBackdrop },
      { name: "Stacked Gift Display", price: "From $45", image: christmasSmallGift },
      { name: "Gingerbread Tree", price: "From $55", image: gingerbreadTree },
      { name: "Nutcracker King Prop", price: "From $120", image: nutcrackerMan },
      { name: "Giant Christmas Ornament", price: "From $45", image: christmasOrnament },
      { name: "Red & Gold Throne Chair", price: "From $75", image: redGoldThrone },
      { name: "Santa Letter Box", price: "From $55", image: santaLetterBox },
      { name: "Santa Baker Prop", price: "From $35", image: santaBakerProp },
      { name: "Small Red Sled", price: "From $45", image: smallRedSled },
      { name: "Welcome Santa Sign", price: "From $55", image: welcomeSantaSign },
      { name: "White Nutcracker Set", price: "From $150", image: whiteNutcracker },
      { name: "Ginger Bread Man", price: "From $120", image: gingerBreadMan },
      { name: "Peppermint Prop", price: "From $25", image: peppermintProp },
      { name: "Christmas Metal Arch", price: "From $175", image:christmasMetalArch },
    ],
  },
  {
    name: "Birthdays",
    subcategories: [
      { name: "Balloons", 
      items: [
        { name: "Custom Balloon Arch", price: "From $0", image: customBalloonArch }, 
        { name: "Custom Balloon Arch", price: "From $0", image: customBalloonArch2}
      ] 
      },
      { name: "Backdrops", items: [
        { name: "Disney Encanto Theme Backdrop", price: "From $150", image: encantoBackdrop },
        { name: "Fairy Garden Backdrop", price: "From $150", image: fairyGardenBackdrop },
        { name: "Frozen Theme Backdrop", price: "From $150", image: frozenBackdrop },
        { name: "Frozen Round Backdrop", price: "From $85", image: frozenRoundBackdrop },
        { name: "Olaf Backdrop", price: "From $85", image: olafBackdrop },
        { name: "Gold Moon Theme Backdrop", price: "From $150", image: goldMoonBackdrop },
        { name: "Jurassic Park Theme Backdrop", price: "From $150", image: jurassicParkBackdrop },
        { name: "Dinosaur Backdrop", price: "From $85", image: dinosaurBackdrop },
        { name: "Mermaid Theme Backdrop", price: "From $125", image: mermaidBackdrop },
        { name: "Under The Sea Theme Backdrop", price: "From $85", image: underTheSeaBackdrop },
        { name: "Mickey & Friends Theme Backdrop", price: "From $225", image: mickeyFriendsBackdrop },
        { name: "Minnie Mouse Theme Backdrop", price: "From $125", image: minnieMouseBackdrop },
        { name: "Princess Jasmine Theme Backdrop", price: "From $85", image: princessJasmineBackdrop },
        { name: "Gabby's Dollhouse Theme Backdrop", price: "From $85", image: gabbysDollhouseThemeBackdrop },
        { name: "Zoo Animals Theme Backdrop", price: "From $85", image: zooAnimalsBackdrop },
        { name: "Beauty & The Beast Backdrop", price: "From $85", image: beautyBeastBackdrop },
        { name: "Spiderman Backdrop", price: "From $85", image: spidermanBackdrop },
        { name: "Butterfly Garden Theme Backdrop", price: "From $85", image: butterflyGardenBackdrop },
        { name: "Cocomelon Theme Backdrop", price: "From $150", image: cocomelonBackdrop },
        { name: "Chanel Theme Backdrop", price: "From $150", image: chanelBackdrop },
        { name: "Blossoms Of Paris Backdrop", price: "From $85", image: blossomsOfParisBackdrop },
        { name: "Purple Backdrop", price: "From $150", image: purpleBackdrop },
      ] },
      { name: "Props", items: [
        { name: "Small Cherry Blossom Trees", price: "From $65", image: smallCherryBlossomTrees },
        { name: "Extra Large Foam Roses", price: "From $15", image: extraLargeFoamRoses },
        { name: "Number 'One' LED Stand-Up Prop", price: "From $125", image: numberOneProp },
        { name: "Number 'Six' LED Stand-Up Prop", price: "From $125", image: numberSixProp },
        { name: "Number 'Two' Prop", price: "From $25", image: numberTwoProp },
        { name: "Duck Prop", price: "From $55", image: duckProp },
        { name: "Blue Rabbit Prop", price: "From $35", image: blueRabbitProp },
        { name: "Pink Rabbit Prop", price: "From $35", image: pinkRabbitProp },
        { name: "Treasure Chest Prop", price: "From $25", image: chestProp },
        { name: "Donut Stack Prop", price: "From $35", image: donutProp },
        { name: "Gingerbread Girl Prop", price: "From $35", image: gingerbreadProp },
        { name: "Ice Cream Sandwich Prop", price: "From $35", image: icecreamProp },
        { name: "Ice Cream Popsicle Stool", price: "From $35", image: icecreamStool },
        { name: "Macaroon Tower Prop", price: "From $35", image: macaroonProp },
        { name: "Mushroom Props Set", price: "From $45", image: mushroomProps },
        { name: "Sheep Props Set", price: "From $45", image: sheepProps },
        { name: "Carousal", price: "From $175", image: carousalProp },
        { name: "Wooden Butterfly Prop", price: "From $75", image: woddenBurtterflyProp },
        { name: "Mini Mouse Prop", price: "From $45", image: miniMouseProp },

        
      ] },
    ],
  },
  {
    name: "Graduation",
    items: [
    { name: "Pre School Graduation Backdrop", price: "From $85", image: preSchoolGrad }, 
    { name: "Graduation Setup", price: "From $85", image: grad }
  ],
  },
  {
    name: "Gender Reveal / Baby Showers",
    items: [
    { name: "Baby Blocks", price: "From $100", image: babyBlocks },
    { name: "BABY Letters / Table ", price: "From $250", image: babyLetters }, 
    { name: "He OR She Reveal Backdrop", price: "From $85", image: heOrSheRevealBackdrop },
    { name: "We Can Bearly Wait Backdrop", price: "From $150", image: BearlyWaitingBabyShowerBackdrop },
    { name: "Crescent Moon Backdrop", price: "From $85", image: cresentMoonBackdrop },
    { name: "Boy Or Girl Sign", price: "From $45", image: boyOrGirl },
  ],
  },
  {
    name: "Ramadan Decorations",
    items: [
      { name: "Gold Ramadan Lanterns Set", price: "From $15", image: ramadanLanterns },
      { name: "White Floral Lanterns Set", price: "From $55", image: whiteLanterns },
      { name: "Black Floral Lanterns", price: "From $55", image: blackLanterns },
      { name: "Crescent Moon Backdrop", price: "From $85", image: cresentMoonBackdrop },
      { name: "Ramadan Kareem Sign", price: "From $45", image: ramadanKareem },
    ],
  },
  {
    name: "Lighting & Hardware",
    items: [
      { name: "Round Backdrop Stand", price: "From $4",  image: roundBackdropStand },
      { name: "Favor Display Shelf", price: "From $4",  image: favorDisplayShelf },
      { name: "Backdrop Base", price: "From $4",  image: backdropBase },
      { name: "Adjustable Uprights", price: "From $85", image: adjustableUprights },
      { name: "Adjustable Backdrop Crossbar", price: "From $85", image: adjustableBackdropCrossbar },
      { name: "Stanchions", price: "From $85", image: stanchions },
      { name: "White Chandelier", price: "From $85", image: whiteChandelier },
      { name: "Gold Chandelier", price: "From $85", image: goldChandelier },
      { name: "Fairy Lights", price: "From $85", image: fairyLights },
      { name: "Black LED Café Lights", price: "From $85", image: blackLedCafeLights },
      { name: "10-Piece. Gold Hanging LED Light", price: "From $85", image: tenPcGoldHangingLEDLight },
      { name: "Graduated 10 LED Gold Light Stand", price: "From $85", image: graduated10LEDGoldLightStand },
      { name: "Multi-Colour LED Uplight", price: "From $85", image: multiColourLEDUplight }
    ],
  },
  {
    name: "Tables",
    items: [
      { name: "Serpentine Gold Table", price: "From $75", image: serpentineGoldTable },
      { name: "Serpentine Silver Table", price: "From $75", image: serpentineSilverTable },
      { name: "Half Moon Table", price: "From $75", image: halfMoonTable },
      { name: "Cocktail Table", price: "From $75", image: cocktailTable },
      { name: "Gold Diamond Side Table Table", price: "From $75", image: goldDiamondSideTable },
      { name: "BABY Letters / Table ", price: "From $120", image: babyLetters },
      { name: "LOVE Letters / Table ", price: "From $120", image: loveLetters },
      { name: "4 Ft Table", price: "From $75", image: fourFtTable  },
      { name: "6 Ft Table", price: "From $75", image: sixFtTable },
      { name: "5 Ft Round Table", price: "From $85", image: fiveFtRoundTable },
      { name: "7 Ft Round Table", price: "From $85", image: sevenFtRoundTable },
      { name: "White Rectangular Tables", price: "From $75", image: whiteRectangularTables },
      { name: "3 Pcs Round Gold Dessert Tables", price: "From $85", image: ThreePcsRoundGoldDessertTables },
      { name: "5 Pcs Round White Dessert Tables", price: "From $85", image: fivePcsRoundWhiteDessertTables },
      { name: "3 Pcs Rectangular Gold Tables", price: "From $85", image: threePcsRectangularGoldTables },
      { name: "3 Tier White Table", price: "From $85", image: threeTierTable },
      { name: "Silver Long Glass Table", price: "From $85", image: silverLongGlassTable },
    ],
  },
  {
    name: "Signs / Mirrors / Easels",
    subcategories: [
      {
        name: "Signs",
        items: [
          { name: "Mr & Mrs Sign", price: "From $45", image: mrandMrsSign },
          { name: "She Said Yes Sign", price: "From $45", image: sheSaidYesSign },
          { name: "Will You Marry Me Sign", price: "From $45", image: willYouMarryMeSign },
          { name: "Happily Ever After Sign", price: "From $45", image: happilyEverAfterSign },
          { name: "Hajj Mabroor Sign", price: "From $45", image: hajjMabrourSign },
          { name: "Bride To Be Sign", price: "From $45", image: brideToBeSign },
          { name: "Happy Birthday Sign", price: "From $45", image: happyBirthdaySign },
          { name: "Congratulations Sign", price: "From $45", image: congratulationsSign },
          { name: "Ramadan Kareem Sign", price: "From $45", image: ramadanKareemSign },
          { name: "Better Together Sign", price: "From $45", image: betterTogetherSign },
          { name: "Boy Or Girl Sign", price: "From $45", image: boyOrGirlSign },
          { name: "Miss to Mrs Neon Sign", price: "From $60", image: missToMrs },
          { name: "Lets Party Neon White Sign", price: "From $60", image: whiteLetsParty },
          { name: "Lets Party Neon Blue Sign", price: "From $60", image: blueLetsParty },
          { name: "White A Sign", price: "From $35", image: ASign },
          { name: "Welcome To Our Love Story Sign", price: "From $25", image: welcomeToOurLoveStorySign },
          { name: "Dreams Do Come True Sign", price: "From $25", image: dreamsDoComeTrueSign },
        ]
      },
      {
        name: "Mirrors",
        items: [
          { name: "Semi Round Mirror", price: "From $85", image: semiRoundMirror },
        ]
      },
      {
        name: "Easels",
        items: [
          { name: "White Easel", price: "From $25", image: whiteEasel },
          { name: "White Easel", price: "From $35", image: whiteEasel2 },
          { name: "Black Easel", price: "From $25", image: blackEasel },
          { name: "Gold Easel", price: "From $25", image: goldEasel }, 
          { name: "Wood Easel", price: "From $25", image: woodEasel },
          { name: "Vintage Easel", price: "From $35", image: rustyEasel },
          { name: "Mini Easel", price: "From $15", image: miniEasel },
          { name: "Chalkboard", price: "From $35", image: chalkboard },
        ]
      }
    ]
  },
  {
    name: "Money Boxes & Table Numbers",
    items: [
      { name: "Table Numbers (Acrylic Stand)", price: "From $5", image: tableNumbers   },
      { name: "Table Numbers (Clear Acrylic Stand)", price: "From $5", image: tableNumbers2  },
      { name: "Table Numbers (Gold Stand)", price: "From $5", image: tableNumbers3  },
      { name: "Frosted Money Box", price: "From $30", image: frostedMoneyBox },
      { name: "White Acrylic Money Box", price: "From $30", image: whiteAcrylicMoneyBox },
      { name: "White Bird Cage", price: "From $20", image: whiteBirdCage },
    ],
  },
];


const RentalCard = ({
  item,
  context,
}: {
  item: RentalItem;
  context?: string;
}) => (
  <div className="bg-background rounded-lg border border-border overflow-hidden group hover:shadow-md transition-shadow">
    <div className="aspect-square bg-secondary flex items-center justify-center overflow-hidden">
      {item.image ? (
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      ) : (
        <span className="text-muted-foreground text-xs italic">Photo</span>
      )}
    </div>
    <div className="p-4">
      <h4 className="font-medium text-sm mb-1">{item.name}</h4>
      {context && (
        <p className="text-xs text-muted-foreground mb-1">{context}</p>
      )}
      <p className="text-primary font-semibold text-sm">{item.price}</p>
    </div>
  </div>
);

const normalizeSearch = (value: string) => value.trim().toLowerCase();

const collectSearchResults = (
  categories: Category[],
  rawSearchTerm: string
): SearchResult[] => {
  const query = normalizeSearch(rawSearchTerm);
  if (!query) return [];

  const results: SearchResult[] = [];

  const walkSubcategories = (
    subcategories: SubCategory[],
    categoryName: string,
    path: string[] = []
  ) => {
    subcategories.forEach((sub) => {
      const currentPath = [...path, sub.name];

      if (sub.items) {
        sub.items.forEach((item) => {
          const searchableText = [
            item.name,
            categoryName,
            ...currentPath,
          ]
            .join(" ")
            .toLowerCase();

          if (searchableText.includes(query)) {
            results.push({
              item,
              category: categoryName,
              path: currentPath,
            });
          }
        });
      }

      if (sub.subcategories) {
        walkSubcategories(sub.subcategories, categoryName, currentPath);
      }
    });
  };

  categories.forEach((category) => {
    if (category.items) {
      category.items.forEach((item) => {
        const searchableText = [item.name, category.name].join(" ").toLowerCase();

        if (searchableText.includes(query)) {
          results.push({
            item,
            category: category.name,
            path: [],
          });
        }
      });
    }

    if (category.subcategories) {
      walkSubcategories(category.subcategories, category.name);
    }
  });

  return results;
};

const Rentals = () => {
  const [activeCategory, setActiveCategory] = useState(rentalCategories[0].name);
  const [activeNestedTabs, setActiveNestedTabs] = useState<Record<string, string>>({});
  const [activeDeepTabs, setActiveDeepTabs] = useState<Record<string, string>>({});
  const [searchTerm, setSearchTerm] = useState("");

  const category = rentalCategories.find((c) => c.name === activeCategory)!;
  const searchResults = collectSearchResults(rentalCategories, searchTerm);

  const renderItemsGrid = (items: RentalItem[] = []) => {
    if (!items.length) {
      return (
        <p className="text-muted-foreground text-sm">
          No items found in this section.
        </p>
      );
    }

    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <RentalCard key={item.name} item={item} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4"
          >
            Rentals
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Browse our collection of premium event decor available for rental.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
        <div className="mb-8">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search rentals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pr-12 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />

              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors text-lg"
                  aria-label="Clear search"
                >
                  Clear
                </button>
              )}
            </div>
        </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <aside className="lg:w-64 shrink-0">
              <h3 className="font-serif text-lg font-semibold mb-4">Categories</h3>
              <nav className="space-y-1">
                {rentalCategories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      activeCategory === cat.name
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {cat.name}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Items */}
            <div className="flex-1">
              {searchTerm.trim() ? (
                <>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">
                    Search Results
                  </h2>

                  {searchResults.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {searchResults.map((result, index) => (
                        <RentalCard
                          key={`${result.item.name}-${result.category}-${index}`}
                          item={result.item}
                          context={
                            result.path.length
                              ? `${result.category} • ${result.path.join(" • ")}`
                              : result.category
                          }
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-sm">
                      No items found.
                    </p>
                  )}
                </>
              ) : (
                <>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">
                    {category.name}
                  </h2>

                  {category.subcategories ? (
                    <Accordion
                      type="multiple"
                      defaultValue={[category.subcategories[0]?.name]}
                    >
                      {category.subcategories.map((sub) => {
                        const activeNested =
                          activeNestedTabs[sub.name] ||
                          sub.subcategories?.[0]?.name ||
                          "";

                        const activeNestedGroup = sub.subcategories?.find(
                          (nested) => nested.name === activeNested
                        );

                        return (
                          <AccordionItem key={sub.name} value={sub.name}>
                            <AccordionTrigger className="text-lg font-serif">
                              {sub.name}
                            </AccordionTrigger>

                            <AccordionContent>
                              {sub.subcategories ? (
                                <div className="pt-4 space-y-6">
                                  <div className="flex flex-wrap gap-3">
                                    {sub.subcategories.map((nested) => (
                                      <button
                                        key={nested.name}
                                        type="button"
                                        onClick={() =>
                                          setActiveNestedTabs((prev) => ({
                                            ...prev,
                                            [sub.name]: nested.name,
                                          }))
                                        }
                                        className={cn(
                                          "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
                                          activeNested === nested.name
                                            ? "bg-primary text-primary-foreground border-primary"
                                            : "bg-background text-foreground border-border hover:bg-muted"
                                        )}
                                      >
                                        {nested.name}
                                      </button>
                                    ))}
                                  </div>

                                  {activeNestedGroup?.subcategories ? (
                                    <div className="space-y-6">
                                      <div className="flex flex-wrap gap-3">
                                        {activeNestedGroup.subcategories.map((deep) => {
                                          const deepKey = `${sub.name}-${activeNestedGroup.name}`;
                                          const activeDeep =
                                            activeDeepTabs[deepKey] ||
                                            activeNestedGroup.subcategories?.[0]?.name ||
                                            "";

                                          return (
                                            <button
                                              key={deep.name}
                                              type="button"
                                              onClick={() =>
                                                setActiveDeepTabs((prev) => ({
                                                  ...prev,
                                                  [deepKey]: deep.name,
                                                }))
                                              }
                                              className={cn(
                                                "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
                                                activeDeep === deep.name
                                                  ? "bg-black text-white border-black"
                                                  : "bg-background text-foreground border-border hover:bg-muted"
                                              )}
                                            >
                                              {deep.name}
                                            </button>
                                          );
                                        })}
                                      </div>

                                      {renderItemsGrid(
                                        activeNestedGroup.subcategories.find((deep) => {
                                          const deepKey = `${sub.name}-${activeNestedGroup.name}`;
                                          const activeDeep =
                                            activeDeepTabs[deepKey] ||
                                            activeNestedGroup.subcategories?.[0]?.name ||
                                            "";
                                          return deep.name === activeDeep;
                                        })?.items || []
                                      )}
                                    </div>
                                  ) : (
                                    renderItemsGrid(activeNestedGroup?.items || [])
                                  )}
                                </div>
                              ) : (
                                <div className="pt-4">
                                  {renderItemsGrid(sub.items || [])}
                                </div>
                              )}
                            </AccordionContent>
                          </AccordionItem>
                        );
                      })}
                    </Accordion>
                  ) : (
                    renderItemsGrid(category.items || [])
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rentals;
