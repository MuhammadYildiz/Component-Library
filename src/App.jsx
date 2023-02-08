import { useState } from "react"
import Carousel from "./components/Carousel"
import Alert from "./components/Alert"
import Button from "./components/Button"
import Modal from "./components/Modal"
import Accordion from "./components/Accordion"
import Card from "./components/Card"
function App() {
    const [showAlert, setshowAlert] = useState(false)
    const [openModal, setopenModal] = useState(false)
    const [openButton, setopenButton] = useState(true)
    const [closeButton, setcloseButton] = useState(false)
    const [disable, setdisable] = useState(false)
    const [accordion1Text, setaccordion1Text] = useState(false)
    const [accordion2Text, setaccordion2Text] = useState(false)
    const [accordion3Text, setaccordion3Text] = useState(false)
    const onDismiss = () => {
        setshowAlert(false)
        setopenModal(false)
        setcloseButton(false)
        setopenButton(true)
        return alert("The Modal Is Closed")
    }
    const openButtonClick = () => {
        setopenModal(true)
        setcloseButton(true)
        setopenButton(false)
    }
    const closeButtonClick = () => {
        setshowAlert(true)
    }
    return (
        <div className="min-h-[100vh] ">
            {showAlert &&
                <Alert color="alertColor" size="alertSize" onDismiss={onDismiss} title="Are you sure you want to close the modal ?">
                    <Alert.KepToSee title="keep Seeing" color="kepSeeColor" size="kepSeeSize" onClick={() => setshowAlert(false)} />
                </Alert>
            }
            <Carousel/>
            {openButton && <Button title="Open Modal" color="buttonColor" size="buttonSize"
                onClick={openButtonClick} disabled={disable}
            />}
            {openModal &&
                <Modal color="modalColor" size="modalSize" >
                    <Modal.Header title="Modal Header Lorem ipsum dolor sit amet consectetur adipisicing elit"
                        color="headerColor" size="headerSize" />
                    <Modal.Body color="bodyColor" size="bodySize"
                        title="Body Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, itaque dolorem dignissimos corrupti sequi dicta eaque eum natus enim est repudiandae ex veritatis? Blanditiis molestiae autem quisquam temporibus excepturi quia! Nam iusto accusantium, ratione non perferendis reprehenderit eum eaque laudantium numquam dicta officiis, inventore error recusandae dolorum saepe minima accusamus odit optio magnam sapiente, maxime necessitatibus? Accusantium consectetur facilis ad incidunt dignissimos neque, animi quia suscipit rem sunt est, ratione dolor autem veritatis iusto tenetur aliquam excepturi? Ex aperiam non qui ullam eveniet incidunt laborum tempore fuga voluptatem ad quaerat ipsa ducimus assumenda ut deleniti corrupti, voluptatum officiis ratione officia libero nisi! Molestiae nesciunt veritatis aliquid." />
                    <Modal.Footer color="footerColor" size="footerSize" />
                </Modal>
            }
            {closeButton && <Button.CloseButton title="Close Modal" color="buttonColor" size="buttonSize"
                onClick={closeButtonClick}
            />}
            <Accordion className='bg-cyan-800 m-[10px] my-10 sm:mx-[100px] p-6 rounded-lg'>
                <Accordion.Panel>
                    <Accordion.Title>
                        <button className="flex justify-between text-xl border-2 border-green-400 border-b-0  p-3 w-full text-white items-center " onClick={() => setaccordion1Text(!accordion1Text)}>
                            <span>What is Flowbite?</span>
                            {!accordion1Text && <span className="bg-green-400 px-4 py-1 pb-2 rounded-[50%] text-white font-bold "> +</span>}
                            {accordion1Text && <span className="bg-green-400  px-4 pb-1 py-1 rounded-[50%] text-white font-bold  text-3xl"> -</span>}
                        </button>
                    </Accordion.Title>
                    {accordion1Text && <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Check out this guide to learn how to {" "}
                            <a
                                href="https://flowbite.com/docs/getting-started/introduction/"
                                className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                                get started
                            </a>
                            {' '}and start developing websites even faster with components on top of Tailwind CSS.
                        </p>
                    </Accordion.Content>}
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title >
                        <button className="flex justify-between text-xl border-2 border-green-400 border-b-0  p-3 w-full text-white items-center" onClick={() => setaccordion2Text(!accordion2Text)}>
                            <span>Is there a Figma file available?</span>
                            {!accordion2Text && <span className="bg-green-400 px-4 py-1 pb-2 rounded-[50%] text-white font-bold "> +</span>}
                            {accordion2Text && <span className="bg-green-400  px-4 pb-1 py-1 rounded-[50%] text-white font-bold  text-3xl"> -</span>}
                        </button>
                    </Accordion.Title>
                    {accordion2Text && <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Check out the{' '}
                            <a
                                href="https://flowbite.com/figma/"
                                className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                                Figma design system
                            </a>
                            {' '}based on the utility classes from Tailwind CSS and components from Flowbite.
                        </p>
                    </Accordion.Content>}
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title >
                        <button className={!accordion3Text ? "flex justify-between text-xl border-2 border-green-400 p-3 w-full text-white items-center" : "border-b-0 flex justify-between text-xl border-2 border-green-400 p-3 w-full text-white items-center"} onClick={() => setaccordion3Text(!accordion3Text)}>
                            <span>What are the differences between Flowbite and Tailwind UI?</span>
                            {!accordion3Text && <span className="bg-green-400 px-4 py-1 pb-2 rounded-[50%] text-white font-bold "> +</span>}
                            {accordion3Text && <span className="bg-green-400  px-4 pb-1 py-1 rounded-[50%] text-white font-bold  text-3xl"> -</span>}
                        </button>
                    </Accordion.Title>
                    {accordion3Text && <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Learn more about these technologies:
                        </p>
                        <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                            <li>
                                <a
                                    href="https://flowbite.com/pro/"
                                    className="text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    Flowbite Pro
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://tailwindui.com/"
                                    rel="nofollow"
                                    className="text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    Tailwind UI
                                </a>
                            </li>
                        </ul>
                    </Accordion.Content>}
                </Accordion.Panel>
            </Accordion>
            <Card color="cardStayle" href="https://tailwindcss.com/" src="https://images.wallpaperscraft.com/image/single/chip_processor_circuit_145282_1280x720.jpg" alt="Program Language" />

        </div>
    )
}
export default App
