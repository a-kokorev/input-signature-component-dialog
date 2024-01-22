# Input Signature Component Dialog

## Integration

1. Install the package into your React app
2. Import the `SignaturePad` component into file where you want to use it as follows:
    ```tsx
    import SignaturePad from 'reusable-input-signature-component-dialog/src/SignaturePad/SignaturePad';
    ```
3. Create state for `signatureSrc` and `setSignatureSrc` in the following way and pass it as props to the `SignaturePad`:
    ```tsx
    const [signatureSrc, setSignatureSrc] = useState<string | undefined>();
    <...>
    <SignaturePad
      signatureSrc={signatureSrc}
      setSignatureSrc={setSignatureSrc}
    />
    ```
    The package exposes `signatureSrc` to allow users to clear signature from the field by settings its value to `undefined`, or to save the signature on the server.
4. You can restrict the size of the signature field by wrapping `SignaturePad` in another element with set sizes, e.g.:
    ```tsx
    <div style={{ width: '350px', height: '120px' }}>
      <SignaturePad
        signatureSrc={signatureSrc}
        setSignatureSrc={setSignatureSrc}
      />
    </div>
    ```
5. You'd need to add a button (or any other logic) that should clear the signature. `onClick` method might have the following logic:
    ```tsx
    onClick={() => setSignatureSrc('')}
    ```
    This was not implemented as part of the package to provide users more control over how and where they want to allow signature deletion.

## Example

1. You can run example project that uses this component.
2. Run `npm install`.
3. `cd .\example`.
4. Run `npm install`.
5. Run `npm run dev`.
6. And you can access the example app on the URL that is displayed in console.
