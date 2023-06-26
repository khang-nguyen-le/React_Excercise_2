import React, { Component } from 'react'

export default class Glasses extends Component {
    state = {
        frame: 'v1'
    }

     changeGlassesHandler = (value) => {
        this.setState({frame: value})
    }

    render() {
        let { frame } = this.state;
        return (
            <div className='py-5'>
                <div className='img-box mx-auto position-relative mb-5' style={{ width: '300px' }}>
                    <img src="./glassesImage/model.jpg" alt="Model" className='img-fluid' />
                    <img src={`./glassesImage/${frame}.png`} className='position-absolute' style={{ width: '150px', top: '27%', left: '25%' }} />
                </div>

                <div className="glasses-box mx-auto bg-white p-5" style={{ width: '75%' }}>
                    <div className="row">
                        <div className="col-2">
                            <img src="./glassesImage/v1.png" alt="" className='img-fluid mb-4' style={{ cursor: 'pointer' }} onClick={() => {
                                this.changeGlassesHandler('v1')
                            }}/>
                        </div>
                        <div className="col-2">
                            <img src="./glassesImage/v2.png" alt="" className='img-fluid mb-4' style={{ cursor: 'pointer' }} onClick={() => {
                                this.changeGlassesHandler('v2')
                            }}/>
                        </div>
                        <div className="col-2">
                            <img src="./glassesImage/v3.png" alt="" className='img-fluid mb-4' style={{ cursor: 'pointer' }} onClick={() => {
                                this.changeGlassesHandler('v3')
                            }}/>
                        </div>
                        <div className="col-2">
                            <img src="./glassesImage/v4.png" alt="" className='img-fluid mb-4' style={{ cursor: 'pointer' }} onClick={() => {
                                this.changeGlassesHandler('v4')
                            }}/>
                        </div>
                        <div className="col-2">
                            <img src="./glassesImage/v5.png" alt="" className='img-fluid mb-4' style={{ cursor: 'pointer' }} onClick={() => {
                                this.changeGlassesHandler('v5')
                            }}/>
                        </div>
                        <div className="col-2">
                            <img src="./glassesImage/v6.png" alt="" className='img-fluid mb-4' style={{ cursor: 'pointer' }} onClick={() => {
                                this.changeGlassesHandler('v6')
                            }}/>
                        </div>
                        <div className="col-2">
                            <img src="./glassesImage/v7.png" alt="" className='img-fluid' style={{ cursor: 'pointer' }} onClick={() => {
                                this.changeGlassesHandler('v7')
                            }}/>
                        </div>
                        <div className="col-2">
                            <img src="./glassesImage/v8.png" alt="" className='img-fluid' style={{ cursor: 'pointer' }} onClick={() => {
                                this.changeGlassesHandler('v8')
                            }}/>
                        </div>
                        <div className="col-2">
                            <img src="./glassesImage/v9.png" alt="" className='img-fluid' style={{ cursor: 'pointer' }} onClick={() => {
                                this.changeGlassesHandler('v9')
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
