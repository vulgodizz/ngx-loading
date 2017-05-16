/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from './ngx-loading.component';
import * as import3 from './ngx-loading.service';
const styles_LoadingComponent:any[] = ['.backdrop[_ngcontent-%COMP%] {\n                z-index: 50;\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background-color: rgba(0, 0, 0, 0.3);\n            }\n\n            .spinner-three-bounce[_ngcontent-%COMP%] {\n                width: 70px;\n                text-align: center;\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                height: 20px;\n                margin: auto;\n                z-index: 51;\n            }\n\n            .spinner-three-bounce[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n                width: 18px;\n                height: 18px;\n                background-color: #ffffff;\n\n                border-radius: 100%;\n                display: inline-block;\n                -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n                animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n            }\n\n            .spinner-three-bounce[_ngcontent-%COMP%]   .bounce1[_ngcontent-%COMP%] {\n                -webkit-animation-delay: -0.32s;\n                animation-delay: -0.32s;\n            }\n\n            .spinner-three-bounce[_ngcontent-%COMP%]   .bounce2[_ngcontent-%COMP%] {\n                -webkit-animation-delay: -0.16s;\n                animation-delay: -0.16s;\n            }\n\n            @-webkit-keyframes sk-bouncedelay {\n                0%, 80%, 100% { -webkit-transform: scale(0) }\n                40% { -webkit-transform: scale(1.0) }\n            }\n\n            @keyframes sk-bouncedelay {\n                0%, 80%, 100% { \n                    -webkit-transform: scale(0);\n                    transform: scale(0);\n                } 40% { \n                    -webkit-transform: scale(1.0);\n                    transform: scale(1.0);\n                }\n            }\n\n\n\n            \n\n            .spinner-sk-rotateplane[_ngcontent-%COMP%] {\n                width: 40px;\n                height: 40px;\n                background-color: #ffffff;\n                text-align: center;\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                margin: auto;\n                z-index: 51;\n                -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n                animation: sk-rotateplane 1.2s infinite ease-in-out;\n            }\n\n            @-webkit-keyframes sk-rotateplane {\n                0% { -webkit-transform: perspective(120px) }\n                50% { -webkit-transform: perspective(120px) rotateY(180deg) }\n                100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\n            }\n\n            @keyframes sk-rotateplane {\n                0% { \n                    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n                    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) \n                } 50% { \n                    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n                    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) \n                } 100% { \n                    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n                    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n                }\n            }\n\n\n\n            \n\n            .spinner-rectangle-bounce[_ngcontent-%COMP%] {\n                width: 50px;\n                height: 40px;\n                font-size: 10px;\n                text-align: center;\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                margin: auto;\n                z-index: 51;\n            }\n\n            .spinner-rectangle-bounce[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n                background-color: #ffffff;\n                height: 100%;\n                width: 6px;\n                display: inline-block;\n                \n                -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n                animation: sk-stretchdelay 1.2s infinite ease-in-out;\n            }\n\n            .spinner-rectangle-bounce[_ngcontent-%COMP%]   .rect2[_ngcontent-%COMP%] {\n                -webkit-animation-delay: -1.1s;\n                animation-delay: -1.1s;\n            }\n\n            .spinner-rectangle-bounce[_ngcontent-%COMP%]   .rect3[_ngcontent-%COMP%] {\n                -webkit-animation-delay: -1.0s;\n                animation-delay: -1.0s;\n            }\n\n            .spinner-rectangle-bounce[_ngcontent-%COMP%]   .rect4[_ngcontent-%COMP%] {\n                -webkit-animation-delay: -0.9s;\n                animation-delay: -0.9s;\n            }\n\n            .spinner-rectangle-bounce[_ngcontent-%COMP%]   .rect5[_ngcontent-%COMP%] {\n                -webkit-animation-delay: -0.8s;\n                animation-delay: -0.8s;\n            }\n\n            @-webkit-keyframes sk-stretchdelay {\n                0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  \n                20% { -webkit-transform: scaleY(1.0) }\n            }\n\n            @keyframes sk-stretchdelay {\n                0%, 40%, 100% { \n                    transform: scaleY(0.4);\n                    -webkit-transform: scaleY(0.4);\n                }  20% { \n                    transform: scaleY(1.0);\n                    -webkit-transform: scaleY(1.0);\n                }\n            }\n\n\n\n            \n\n            .spinner-wandering-cubes[_ngcontent-%COMP%] {\n                width: 60px;\n                height: 58px;\n                font-size: 10px;\n                text-align: center;\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                margin: auto;\n                z-index: 51;\n            }\n\n            .cube1[_ngcontent-%COMP%], .cube2[_ngcontent-%COMP%] {\n                background-color: #ffffff;\n                width: 15px;\n                height: 15px;\n                position: absolute;\n                top: 0;\n                left: 0;\n                \n                -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;\n                animation: sk-cubemove 1.8s infinite ease-in-out;\n            }\n\n            .cube2[_ngcontent-%COMP%] {\n                -webkit-animation-delay: -0.9s;\n                animation-delay: -0.9s;\n            }\n\n            @-webkit-keyframes sk-cubemove {\n                25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }\n                50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }\n                75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }\n                100% { -webkit-transform: rotate(-360deg) }\n            }\n\n            @keyframes sk-cubemove {\n                25% { \n                    transform: translateX(42px) rotate(-90deg) scale(0.5);\n                    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n                } 50% { \n                    transform: translateX(42px) translateY(42px) rotate(-179deg);\n                    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\n                } 50.1% { \n                    transform: translateX(42px) translateY(42px) rotate(-180deg);\n                    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n                } 75% { \n                    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n                    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n                } 100% { \n                    transform: rotate(-360deg);\n                    -webkit-transform: rotate(-360deg);\n                }\n            }'];
export const RenderType_LoadingComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 0,
  styles: styles_LoadingComponent,
  data: {}
}
);
function View_LoadingComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'backdrop'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod([
      'border-radius',
      'background-color'
    ]
    )
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = ck(v,2,0,((co.loadingConfig == null)? (null as any): co.loadingConfig.backdropBorderRadius),((co.loadingConfig == null)? (null as any): co.loadingConfig.backdropBackgroundColour));
    ck(v,1,0,currVal_0);
  },(null as any));
}
function View_LoadingComponent_3(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),13,'div',[[
        'class',
        'spinner-three-bounce'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'bounce1'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['background-color']),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'bounce2'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['background-color']),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'bounce3'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['background-color']),
    (l()(),import0.ɵted((null as any),['\n            ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = ck(v,4,0,((co.loadingConfig == null)? (null as any): co.loadingConfig.primaryColour));
    ck(v,3,0,currVal_0);
    const currVal_1:any = ck(v,8,0,((co.loadingConfig == null)? (null as any): co.loadingConfig.secondaryColour));
    ck(v,7,0,currVal_1);
    const currVal_2:any = ck(v,12,0,((co.loadingConfig == null)? (null as any): co.loadingConfig.tertiaryColour));
    ck(v,11,0,currVal_2);
  },(null as any));
}
function View_LoadingComponent_4(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'spinner-sk-rotateplane'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['background-color'])
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = ck(v,2,0,((co.loadingConfig == null)? (null as any): co.loadingConfig.primaryColour));
    ck(v,1,0,currVal_0);
  },(null as any));
}
function View_LoadingComponent_5(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),21,'div',[[
        'class',
        'spinner-rectangle-bounce'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'rect1'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['background-color']),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'rect2'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['background-color']),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'rect3'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['background-color']),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'rect4'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['background-color']),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'rect5'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['background-color']),
    (l()(),import0.ɵted((null as any),['\n            ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = ck(v,4,0,((co.loadingConfig == null)? (null as any): co.loadingConfig.primaryColour));
    ck(v,3,0,currVal_0);
    const currVal_1:any = ck(v,8,0,((co.loadingConfig == null)? (null as any): co.loadingConfig.primaryColour));
    ck(v,7,0,currVal_1);
    const currVal_2:any = ck(v,12,0,((co.loadingConfig == null)? (null as any): co.loadingConfig.primaryColour));
    ck(v,11,0,currVal_2);
    const currVal_3:any = ck(v,16,0,((co.loadingConfig == null)? (null as any): co.loadingConfig.primaryColour));
    ck(v,15,0,currVal_3);
    const currVal_4:any = ck(v,20,0,((co.loadingConfig == null)? (null as any): co.loadingConfig.primaryColour));
    ck(v,19,0,currVal_4);
  },(null as any));
}
function View_LoadingComponent_6(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),9,'div',[[
        'class',
        'spinner-wandering-cubes'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'cube1'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['background-color']),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'cube2'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['background-color']),
    (l()(),import0.ɵted((null as any),['\n            ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = ck(v,4,0,((co.loadingConfig == null)? (null as any): co.loadingConfig.primaryColour));
    ck(v,3,0,currVal_0);
    const currVal_1:any = ck(v,8,0,((co.loadingConfig == null)? (null as any): co.loadingConfig.secondaryColour));
    ck(v,7,0,currVal_1);
  },(null as any));
}
function View_LoadingComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),13,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_LoadingComponent_3)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n            '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_LoadingComponent_4)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n            '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_LoadingComponent_5)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n            '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_LoadingComponent_6)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n        ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = (co.getAnimationType(((co.loadingConfig == null)? (null as any): co.loadingConfig.animationType)) === co.ANIMATION_TYPES.threeBounce);
    ck(v,3,0,currVal_0);
    const currVal_1:any = (co.getAnimationType(((co.loadingConfig == null)? (null as any): co.loadingConfig.animationType)) === co.ANIMATION_TYPES.rotatingPlane);
    ck(v,6,0,currVal_1);
    const currVal_2:any = (co.getAnimationType(((co.loadingConfig == null)? (null as any): co.loadingConfig.animationType)) === co.ANIMATION_TYPES.rectangleBounce);
    ck(v,9,0,currVal_2);
    const currVal_3:any = (co.getAnimationType(((co.loadingConfig == null)? (null as any): co.loadingConfig.animationType)) === co.ANIMATION_TYPES.wanderingCubes);
    ck(v,12,0,currVal_3);
  },(null as any));
}
export function View_LoadingComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_LoadingComponent_1)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_LoadingComponent_2)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n    ']))
  ]
  ,(ck,v) => {
    var co:import2.LoadingComponent = v.component;
    const currVal_0:any = co.show;
    ck(v,2,0,currVal_0);
    const currVal_1:any = co.show;
    ck(v,5,0,currVal_1);
  },(null as any));
}
function View_LoadingComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'ngx-loading',([] as any[]),(null as any),(null as any),(null as any),View_LoadingComponent_0,RenderType_LoadingComponent)),
    import0.ɵdid(57344,(null as any),0,import2.LoadingComponent,[import3.LoadingConfigService],(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const LoadingComponentNgFactory:import0.ComponentFactory<import2.LoadingComponent> = import0.ɵccf('ngx-loading',import2.LoadingComponent,View_LoadingComponent_Host_0,{
  show: 'show',
  config: 'config'
}
,{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovUmVwby9uZ3gtbG9hZGluZy9zcmMvbmd4LWxvYWRpbmcuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1JlcG8vbmd4LWxvYWRpbmcvc3JjL25neC1sb2FkaW5nLmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L1JlcG8vbmd4LWxvYWRpbmcvc3JjL25neC1sb2FkaW5nLmNvbXBvbmVudC50cy5Mb2FkaW5nQ29tcG9uZW50Lmh0bWwiLCJuZzovLy9DOi9SZXBvL25neC1sb2FkaW5nL3NyYy9uZ3gtbG9hZGluZy5jb21wb25lbnQudHMuTG9hZGluZ0NvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgICAgICA8ZGl2ICpuZ0lmPVwic2hvd1wiIGNsYXNzPVwiYmFja2Ryb3BcIiBbbmdTdHlsZV09XCJ7J2JvcmRlci1yYWRpdXMnOiBsb2FkaW5nQ29uZmlnPy5iYWNrZHJvcEJvcmRlclJhZGl1cywgJ2JhY2tncm91bmQtY29sb3InOiBsb2FkaW5nQ29uZmlnPy5iYWNrZHJvcEJhY2tncm91bmRDb2xvdXJ9XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJzaG93XCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZ2V0QW5pbWF0aW9uVHlwZShsb2FkaW5nQ29uZmlnPy5hbmltYXRpb25UeXBlKSA9PT0gQU5JTUFUSU9OX1RZUEVTLnRocmVlQm91bmNlXCIgY2xhc3M9XCJzcGlubmVyLXRocmVlLWJvdW5jZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3VuY2UxXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogbG9hZGluZ0NvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm91bmNlMlwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGxvYWRpbmdDb25maWc/LnNlY29uZGFyeUNvbG91cn1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm91bmNlM1wiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGxvYWRpbmdDb25maWc/LnRlcnRpYXJ5Q29sb3VyfVwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLXNrLXJvdGF0ZXBsYW5lXCIgKm5nSWY9XCJnZXRBbmltYXRpb25UeXBlKGxvYWRpbmdDb25maWc/LmFuaW1hdGlvblR5cGUpID09PSBBTklNQVRJT05fVFlQRVMucm90YXRpbmdQbGFuZVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGxvYWRpbmdDb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLXJlY3RhbmdsZS1ib3VuY2VcIiAqbmdJZj1cImdldEFuaW1hdGlvblR5cGUobG9hZGluZ0NvbmZpZz8uYW5pbWF0aW9uVHlwZSkgPT09IEFOSU1BVElPTl9UWVBFUy5yZWN0YW5nbGVCb3VuY2VcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjdDFcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBsb2FkaW5nQ29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0MlwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGxvYWRpbmdDb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3QzXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogbG9hZGluZ0NvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjdDRcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBsb2FkaW5nQ29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0NVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGxvYWRpbmdDb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItd2FuZGVyaW5nLWN1YmVzXCIgKm5nSWY9XCJnZXRBbmltYXRpb25UeXBlKGxvYWRpbmdDb25maWc/LmFuaW1hdGlvblR5cGUpID09PSBBTklNQVRJT05fVFlQRVMud2FuZGVyaW5nQ3ViZXNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3ViZTFcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBsb2FkaW5nQ29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdWJlMlwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGxvYWRpbmdDb25maWc/LnNlY29uZGFyeUNvbG91cn1cIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAiLCI8bmd4LWxvYWRpbmc+PC9uZ3gtbG9hZGluZz4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNDUTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFtQztNQUFBO01BQUE7SUFBQTtJQUFBOzs7O0lBQUE7SUFBbkMsU0FBbUMsU0FBbkM7Ozs7O01BRUk7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF5SDtNQUNySDtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dC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
