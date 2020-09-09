import { Component, OnInit } from '@angular/core';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { SpacexlpService } from './service/spacexlp.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-spacexlp',
  templateUrl: './spacexlp.component.html',
  styleUrls: ['./spacexlp.component.scss']
})
export class SpacexlpComponent implements OnInit {
  data: any;
  apiData: any;
  years = [
    { year: '2006', i: 0 },
    { year: '2007', i: 0 },
    { year: '2008', i: 0 },
    { year: '2009', i: 0 },
    { year: '2010', i: 0 },
    { year: '2011', i: 0 },
    { year: '2012', i: 0 },
    { year: '2012', i: 0 },
    { year: '2013', i: 0 },
    { year: '2014', i: 0 },
    { year: '2015', i: 0 },
    { year: '2016', i: 0 },
    { year: '2017', i: 0 },
    { year: '2018', i: 0 },
    { year: '2019', i: 0 },
    { year: '2020', i: 0 }
  ];
  loading: any = true;
  status = false;
  qp = {
    y: null,
    lc: null,
    ld: null,
  };
  constructor(
    private _space: SpacexlpService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
    ) {
      this.title.setTitle('Entreprenuers Guide - All SpaceX programs launched after 2005');
      this.meta.addTag({ name: 'description', content: 'Read and research about all SpaceX programs launched in the following year 2006-2020. Also, filter your spaceX data with the specific year, successfull launch and landing.' });
      this.meta.addTag({ name: 'robots', content: 'index,follow' });
      this.meta.addTag({ name: 'DC.Title', content: 'All SpaceX programs launched after 2005' });
      // Nowdays, keywords are not used by crawlers at all
      this.spaceXInit();
  }

  ngOnInit(): void { }

  grabYear(d): void {
    this.years.forEach(e => {
      e.i = 0;
    });
    d.i = !d.i;
    this.qp.y = d.year;
    this.spaceXInit();
  }

  grabLaunch(bool): void {
    this.qp.lc = bool;
    this.spaceXInit();
  }

  grabLanding(bool): void {
    this.qp.ld = bool;
    this.spaceXInit();
  }

  spaceXInit(): void {
    this.data = null;
    if ( !this.apiData ) {
      this.router.navigate([], { relativeTo: this.route, queryParams: null });
      this._space.spaceX().subscribe((event: HttpEvent<any>) => {
        let _api = this._space.HttpEventResponse(event);
        if ( event.type === 4 ) {
          this.apiData = _api;
          this.data = _api;
          // console.log(_api);
          this.loading = false;
        }
      }, err => {
        this.loading = false;
        console.log(err);
        alert('Try after some time');
      });
    } else {
      let l = this.apiData.length;
      if ( l > 100 ){
        const index = 100 - l;
        this.apiData.splice(index, -index);
        l = this.apiData.length;
      }
      this.data = this.apiData;
      let value = {
        launch_success: this.qp.lc,
        land_success: this.qp.ld,
        launch_year: this.qp.y
      };
      if ( this.qp.lc === null ) {
        delete value.launch_success;
      }
      if ( this.qp.ld === null ) {
        delete value.land_success;
      }
      if ( this.qp.y === null ) {
        delete value.launch_year;
      }
      this.data = this.apiData.filter( (item) => {
        for (let k in value) {
          if (item[k] === undefined || item[k] !== value[k]) {
            return false;
          }
        }
        return true;
      });
      value = Object.assign({limit: l}, value);
      this.router.navigate([], { relativeTo: this.route, queryParams: value });
    }
  }

}
