import React from 'react';
import {Samy,Proxy} from '../src';
import renderer from 'react-test-renderer';
import sinon from 'sinon'
import {mount} from 'enzyme'
import fs from 'fs'
import path from 'path'

var container
var xhr
var requests = []

jest.useFakeTimers()
describe('SamySVG', ()=>{
	beforeEach(()=>{
		console.log('beforeEach')
		container = document.body.appendChild(document.createElement('div'))
		xhr = sinon.useFakeXMLHttpRequest()
		requests = []
		xhr.onCreate = (xhr) =>{
			requests.push(xhr)
		}
	})

	afterEach(()=>{
		console.log('afterEach')
		if (!xhr) {
			console.log('WHATT')
		}
	    xhr.restore()
	    document.body.removeChild(container)

	})

	it('Samy loads SVG', (done)=>{
		
		const component = mount(<Samy path="1.svg" onSVGReady={(svg)=>{
			expect(svg).toBeTruthy()
			done()
		}}/>, {attachTo:container})
		requests[0].respond(200, {}, fs.readFileSync(path.join(__dirname,'1.svg'), 'utf8'))
		jest.runAllTimers()
	})
})

