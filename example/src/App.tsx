import { useState } from 'react';
import SignaturePad from 'reusable-input-signature-component-dialog/src/SignaturePad/SignaturePad';

function App() {
  const [signatureSrc, setSignatureSrc] = useState<string | undefined>();

  return (
    <div style={{ maxWidth: '1000px' }}>
      <h1>Lorem Ipsum</h1>
      <div>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</div>
      <div>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum sit amet est vitae placerat. Integer nec justo non augue bibendum sagittis. Donec a dictum sapien, et accumsan turpis. Fusce condimentum ipsum in ante iaculis, pretium feugiat ante sodales. Mauris ullamcorper odio in orci luctus, ac auctor sapien congue. Sed sit amet aliquet nisi, viverra mattis mi. Donec euismod risus sit amet leo ornare maximus.</p>

      <p>Maecenas dignissim odio quis tincidunt molestie. Curabitur nec volutpat massa. Aliquam gravida arcu ut ligula convallis, eget venenatis tellus ullamcorper. Fusce accumsan pharetra metus, et faucibus purus finibus quis. Donec finibus, ligula et euismod laoreet, erat elit maximus lacus, in porttitor purus nisl eu risus. Maecenas cursus libero quis enim viverra dapibus. Ut sollicitudin euismod massa, eu consectetur velit euismod a. Curabitur dignissim lectus quam, vel dictum urna rutrum at. Vivamus non sagittis augue. Nam rhoncus dignissim lorem quis ornare. Aliquam sollicitudin nisi in nisi facilisis, non faucibus orci fringilla. Nunc mi eros, aliquam a posuere non, ornare nec massa. Aliquam a rutrum massa. Nam id magna sit amet eros elementum facilisis eget quis urna.</p>

      <p>Proin felis ipsum, tristique a euismod non, tincidunt quis massa. Nunc elementum nulla leo, non scelerisque elit ultrices in. Curabitur fringilla consectetur quam, sit amet tempor nisi egestas in. Donec lacinia dui et ipsum egestas dictum. Etiam consectetur, quam et feugiat lacinia, elit risus varius arcu, non maximus libero diam at justo. Mauris ac urna fermentum, porttitor ligula vel, gravida elit. Pellentesque sit amet ipsum eget justo faucibus convallis dapibus vitae felis. Praesent ac odio fringilla, venenatis tellus eu, cursus urna. Aliquam eget lorem lectus. Ut convallis pharetra enim vitae ornare. Quisque facilisis sollicitudin placerat. Suspendisse potenti. Pellentesque vel sapien eget tortor tincidunt sollicitudin. Aenean sollicitudin rutrum orci non congue. Nulla venenatis sem velit, vitae ultrices tellus pharetra vel.</p>

      <p>Integer a risus id felis blandit tempor. Nunc ut lacus vitae quam ornare faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc convallis, dolor id viverra consequat, mi mauris iaculis nisi, sagittis euismod eros ipsum quis dolor. Aenean massa tellus, cursus sit amet justo nec, aliquet rutrum felis. Sed eros risus, dapibus et quam eget, finibus ultricies sapien. Ut vitae sapien varius, maximus sem nec, tincidunt orci. Integer enim erat, lobortis sed dignissim in, dignissim ut dolor. Phasellus elementum rhoncus viverra. Cras id fringilla urna. Proin non vestibulum nisi. Nulla eget lacus non augue iaculis pharetra. Curabitur vitae nisi lorem. Mauris pulvinar pulvinar mi, porttitor congue leo porta vitae. Donec venenatis, nunc a viverra tincidunt, elit dui tempor nunc, nec accumsan lectus odio quis dui.</p>


      <p>Integer feugiat egestas risus, nec pulvinar velit pellentesque vestibulum. Aliquam pharetra mauris blandit diam ullamcorper, eu mollis massa blandit. Etiam scelerisque magna at sodales venenatis. Nam porta arcu sapien, ac feugiat libero condimentum non. Nam luctus sit amet sapien vitae tristique. Aenean volutpat lobortis erat, vitae pretium nibh congue eget. Aliquam mauris ligula, elementum sed metus vitae, faucibus suscipit orci. Fusce at imperdiet diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
      <div style={{ width: '350px', height: '120px' }}>
        <SignaturePad
          signatureSrc={signatureSrc}
          setSignatureSrc={setSignatureSrc}
        />
        {signatureSrc && (
          <button
            style={{
              position: 'relative',
              zIndex: 1,
              width: '30px',
              height: '30px',
              padding: 0,
              top: '-115px',
              right: '-315px'
            }}
            onClick={() => setSignatureSrc('')}
          >
            <i className="bi bi-trash"></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default App
