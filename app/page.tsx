"use client";
import React, { useEffect, useState } from 'react';
import { ChevronRight, Database, Cpu, Clock, BarChart } from 'lucide-react';
import { Tooltip } from "./components/Tooltip";
import Image from 'next/image';
import WindowComparison from './components/WindowComparison';

const Presentation = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const slides = [
    // Title Slide
    <div key="title" className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 page-break">
      <h1 className="text-6xl font-bold mb-6">FineZip Framework</h1>
      <h2 className="text-2xl mb-8">Pushing the Limits of Large Language Models for Practical Lossless Text Compression</h2>
      <div className="flex items-center space-x-4 mb-12">
        <Database size={32} />
        <ChevronRight size={24} />
        <Cpu size={32} />
        <ChevronRight size={24} />
        <Clock size={32} />
      </div>
      <div className="mt-auto text-xl">
        <p>Tiesunlong Shen</p>
      </div>
    </div>,

    // Overview Slide with Tooltips
    <div key="overview" className="flex flex-col h-screen bg-white p-8 page-break">
      <h2 className="text-3xl font-bold mb-8 text-blue-800">Framework Overview</h2>
      <div className="grid grid-cols-2 gap-8 flex-grow">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-6">Key Innovations</h3>
          <div className="flex flex-col space-y-6">
            <Tooltip 
              content={
                <div className="max-w-md">
                  <p className="text-lg font-semibold mb-3">LoRA Online Memory is an innovative compression preprocessing step:</p>
                  <ul className="list-disc pl-4 mt-2 space-y-2">
                    <li>Using LoRA/QLoRA for parameter-efficient fine-tuning</li>
                    <li>Model adaptation for compression data</li>
                    <li>Fine-tuning weights occupy minimal additional storage</li>
                    <li>Significantly improves model prediction accuracy</li>
                  </ul>
                </div>
              }
            >
              <div className="flex items-center hover:bg-blue-100 p-2 rounded-lg transition-colors">
                <ChevronRight className="text-blue-600 mr-2" />
                <span>LoRA Online Memory</span>
              </div>
            </Tooltip>

            <Tooltip
              content={
                <div className="max-w-md">
                  <p className="text-lg font-semibold mb-3">Dynamic Context Window Design:</p>
                  <ul className="list-disc pl-4 mt-2 space-y-2">
                    <li>Process text in blocks of 512 tokens</li>
                    <li>Dynamic context length for tokens within blocks</li>
                    <li>Support for batch parallel processing</li>
                    <li>Balance between compression ratio and computational efficiency</li>
                  </ul>
                  <div className="mt-4 bg-gray-100 p-3 rounded">
                    <p className="font-semibold mb-2">Processing Example:</p>
                    <p className="text-sm">For text "The quick brown fox jumps over the lazy dog":</p>
                    <ul className="text-sm list-decimal pl-4 mt-2">
                      <li>1st token "The" - no context</li>
                      <li>2nd token "quick" - uses 1 token context ("The")</li>
                      <li>3rd token "brown" - uses 2 token context ("The quick")</li>
                      <li>And so on, with context length growing dynamically</li>
                    </ul>
                    <p className="text-sm mt-2">This design enables parallel processing of multiple text blocks while maintaining necessary context information.</p>
                  </div>
                </div>
              }
            >
              <div className="flex items-center hover:bg-blue-100 p-2 rounded-lg transition-colors">
                <ChevronRight className="text-blue-600 mr-2" />
                <span>Dynamic Context Window (256-512)</span>
              </div>
            </Tooltip>

            <Tooltip
              content={
                <div className="max-w-md">
                  <p className="text-lg font-semibold mb-3">4-bit Quantization Optimization:</p>
                  <p className="mb-3 text-sm">4-bit quantization is a model compression technique, compressing model parameters from 32-bit floating point numbers to 4-bit fixed point numbers, which can significantly reduce model size and memory usage while maintaining model performance.</p>
                  <ul className="list-disc pl-4 mt-2 space-y-2">
                    <li>Using QLoRA for 4-bit quantization training</li>
                    <li>Significantly reduces memory usage (about 75%)</li>
                    <li>Supports larger batch parallel processing</li>
                    <li>Only loses about 13% compression performance</li>
                  </ul>
                </div>
              }
            >
              <div className="flex items-center hover:bg-blue-100 p-2 rounded-lg transition-colors">
                <ChevronRight className="text-blue-600 mr-2" />
                <span>4-bit Quantization Acceleration</span>
              </div>
            </Tooltip>

            <Tooltip
              content={
                <div className="max-w-md">
                  <p className="text-lg font-semibold mb-3">Batch Parallel Optimization Mechanism:</p>
                  <ul className="list-disc pl-4 mt-2 space-y-2">
                    <li>Supports multi-batch parallel compression</li>
                    <li>Dynamically adjusts batch size (up to 70)</li>
                    <li>Efficiently utilizes GPU computing resources</li>
                    <li>Significantly improves processing speed</li>
                  </ul>
                  <div className="mt-4 bg-gray-100 p-3 rounded">
                    <p className="font-semibold mb-2">Parallel Processing Example:</p>
                    <p className="text-sm">Assuming a 10MB text file:</p>
                    <ul className="text-sm list-decimal pl-4 mt-2">
                      <li>Split the text into multiple 512 token blocks</li>
                      <li>Use batch size 70 to process 70 blocks simultaneously</li>
                      <li>Use dynamic context within each block for compression</li>
                      <li>Different GPU cores compute different batches in parallel</li>
                    </ul>
                    <p className="text-sm mt-2">This parallel mechanism increases processing speed by about 4 times.</p>
                  </div>
                </div>
              }
            >
              <div className="flex items-center hover:bg-blue-100 p-2 rounded-lg transition-colors">
                <ChevronRight className="text-blue-600 mr-2" />
                <span>Batch Parallel Computation</span>
              </div>
            </Tooltip>
          </div>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-6">Performance Highlights</h3>
          <div className="flex flex-col space-y-6">
            <Tooltip 
              content={
                <div className="max-w-md">
                  <h4 className="font-semibold mb-2">Speed Comparison</h4>
                  <table className="w-full text-sm">
                    <thead>
                      <tr>
                        <th className="border p-1">Method</th>
                        <th className="border p-1">Compression Time (10MB)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-1">LLMZip</td>
                        <td className="border p-1">13,651 minutes</td>
                      </tr>
                      <tr>
                        <td className="border p-1">FineZip</td>
                        <td className="border p-1">250 minutes</td>
                      </tr>
                      <tr>
                        <td className="border p-1">Improvement</td>
                        <td className="border p-1 font-bold">54x</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              }
            >
              <div className="flex items-center hover:bg-blue-100 p-2 rounded-lg transition-colors">
                <BarChart className="text-blue-600 mr-2" />
                <span>54x Faster than LLMZip</span>
              </div>
            </Tooltip>

            <Tooltip 
              content={
                <div className="max-w-md">
                  <h4 className="font-semibold mb-2">Compression Ratio Comparison</h4>
                  <table className="w-full text-sm">
                    <thead>
                      <tr>
                        <th className="border p-1">Method</th>
                        <th className="border p-1">Compression Ratio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-1">Traditional method (PPM - Prediction by Partial Matching)</td>
                        <td className="border p-1">0.250</td>
                      </tr>
                      <tr>
                        <td className="border p-1">FineZip</td>
                        <td className="border p-1">0.128</td>
                      </tr>
                      <tr>
                        <td className="border p-1">Improvement</td>
                        <td className="border p-1 font-bold">48.8%</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs mt-2">Note: PPM is a classic compression algorithm based on context modeling, widely used in text compression.</p>
                </div>
              }
            >
              <div className="flex items-center hover:bg-blue-100 p-2 rounded-lg transition-colors">
                <BarChart className="text-blue-600 mr-2" />
                <span>Compression Ratio 0.128 (50% better than traditional method)</span>
              </div>
            </Tooltip>

            <Tooltip 
              content={
                <div className="max-w-md">
                  <h4 className="font-semibold mb-2">Processing Time Analysis</h4>
                  <table className="w-full text-sm">
                    <thead>
                      <tr>
                        <th className="border p-1">Stage</th>
                        <th className="border p-1">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-1">Online Memory</td>
                        <td className="border p-1">30 minutes</td>
                      </tr>
                      <tr>
                        <td className="border p-1">Compression Processing</td>
                        <td className="border p-1">220 minutes</td>
                      </tr>
                      <tr>
                        <td className="border p-1">Total</td>
                        <td className="border p-1 font-bold">250 minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              }
            >
              <div className="flex items-center hover:bg-blue-100 p-2 rounded-lg transition-colors">
                <BarChart className="text-blue-600 mr-2" />
                <span>10MB data takes about 4 hours</span>
              </div>
            </Tooltip>

            <Tooltip 
              content={
                <div className="max-w-md">
                  <h4 className="font-semibold mb-2">File Size Adaptability</h4>
                  <table className="w-full text-sm">
                    <thead>
                      <tr>
                        <th className="border p-1">File Size</th>
                        <th className="border p-1">Compression Ratio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-1">1MB</td>
                        <td className="border p-1">0.127</td>
                      </tr>
                      <tr>
                        <td className="border p-1">10MB</td>
                        <td className="border p-1">0.128</td>
                      </tr>
                      <tr>
                        <td className="border p-1">100MB</td>
                        <td className="border p-1">0.129</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              }
            >
              <div className="flex items-center hover:bg-blue-100 p-2 rounded-lg transition-colors">
                <BarChart className="text-blue-600 mr-2" />
                <span>Supports compression of 1MB-100MB files</span>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>,

    // Framework Slide
    <div key="framework" className="flex flex-col h-screen bg-white p-8 page-break">
      <h2 className="text-3xl font-bold mb-8 text-blue-800">System Overall Framework</h2>
      <div className="flex justify-center items-center flex-grow">
        <Image
          src="/framework.png"
          alt="FineZip Framework"
          width={1200}
          height={600}
          className="object-contain max-h-[80vh]"
          priority
        />
      </div>
    </div>,

    // Architecture Slide
    <div key="architecture" className="flex flex-col h-screen bg-white p-8 page-break">
      <h2 className="text-3xl font-bold mb-8 text-blue-800">System Architecture</h2>
      <div className="flex flex-col space-y-8 flex-grow">
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Stage 1: Input: LLaMA Model, Output: LLaMA Model Fine-Tuned for Compression</h3>
            <div className="space-y-4">
              <Tooltip
                content={
                  <div className="max-w-4xl">
                    <div className="flex gap-6">
                      <div className="flex-1">
                        <p className="text-lg font-semibold mb-3">LoRA Efficient Fine-Tuning Principle:</p>
                        <div className="mb-4">
                          <p className="mb-2">LoRA achieves efficient fine-tuning by adding low-rank matrices to the original weights:</p>
                          <ul className="list-disc pl-4 space-y-2">
                            <li>Decompose the large weight matrix into two smaller matrices</li>
                            <li>Only train these smaller matrices, keeping the original weights frozen</li>
                            <li>Significantly reduces the number of training parameters</li>
                          </ul>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                          <p className="font-semibold mb-2">Code Implementation:</p>
                          <pre className="text-xs bg-gray-50 p-2">
                            {`lora_config = LoraConfig(
    r=8,            # Low-rank decomposition dimension
    lora_alpha=32,  # Scaling factor
    lora_dropout=0.05,
    task_type="CAUSAL_LM"
)`}
                          </pre>
                        </div>
                      </div>
                      <div className="flex-1">
                        <Image 
                          src="/LoRA.png"
                          alt="LoRA Structure"
                          width={400}
                          height={300}
                          className="w-full h-auto object-contain"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                }
              >
                <div className="flex items-center hover:bg-blue-100 p-2 rounded-lg transition-colors">
                  <li>Using LoRA/QLoRA for efficient fine-tuning</li>
                </div>
              </Tooltip>

              <Tooltip
                content={
                  <div className="max-w-md">
                    <p className="text-lg font-semibold mb-3">4-bit Quantization Technology Implementation:</p>
                    <div className="mb-4">
                      <p className="mb-2">4-bit quantization reduces memory usage through the following steps:</p>
                      <ul className="list-disc pl-4 space-y-2">
                        <li>Compress 32-bit floating point parameters into 4-bit integers</li>
                        <li>Using NF4 format to maintain numerical precision</li>
                        <li>Enabling double quantization further saves memory</li>
                      </ul>
                    </div>
                    <div className="bg-gray-100 p-3 rounded">
                      <p className="font-semibold mb-2">Code Implementation:</p>
                      <pre className="text-xs bg-gray-50 p-2">
                        {`quant_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_compute_dtype=torch.float16,
    bnb_4bit_use_double_quant=True,
    bnb_4bit_quant_type="nf4"
)`}
                      </pre>
                    </div>
                  </div>
                }
              >
                <div className="flex items-center hover:bg-blue-100 p-2 rounded-lg transition-colors">
                  <li>4-bit Quantization Reduces Memory Usage</li>
                </div>
              </Tooltip>

              <div className="flex items-center p-2">
                <li>Adapted to specific datasets</li>
              </div>
              <div className="flex items-center p-2">
                <li>We reimplemented using LLaMA 3.1, original paper used LLaMA 2</li>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Stage 2: Compression Processing (Input: Text to be Compressed, Output: Compressed File)</h3>
            <div className="space-y-4">
              <div className="pl-4 space-y-4">
                <Tooltip
                  content={
                    <div className="max-w-md">
                      <p className="text-lg font-semibold mb-3">Text Preprocessing and Blocking Process:</p>
                      <div className="bg-gray-100 p-3 rounded mb-4">
                        <p className="font-semibold">Input Example:</p>
                        <p className="text-sm">Original text: "The quick brown fox jumps over the lazy dog"</p>
                      </div>
                      <div className="mb-4">
                        <p className="font-semibold">Processing Steps Description:</p>
                        <ol className="list-decimal pl-4 space-y-2">
                          <li>
                            <p className="font-medium">Text converted to tokens:</p>
                            <p className="text-sm">Using LLaMA's tokenizer to split input text into token ID sequences. Each token represents a subword unit.</p>
                            <pre className="text-xs bg-gray-50 p-2 mt-1">
                              tokens = [464, 2159, 1362, ...]
                            </pre>
                          </li>
                          <li>
                            <p className="font-medium">Blocking process:</p>
                            <p className="text-sm">Reshape token sequences into fixed size (512) blocks for batch processing. If the last block is less than 512, it is padded.</p>
                            <pre className="text-xs bg-gray-50 p-2 mt-1">
                              block = tokens.reshape(-1, 512)
                            </pre>
                          </li>
                          <li>
                            <p className="font-medium">Padding process:</p>
                            <p className="text-sm">Using a special EOS (end-of-sequence) token to pad the last incomplete block, ensuring all blocks are consistent in size.</p>
                          </li>
                        </ol>
                      </div>
                      <div className="bg-gray-100 p-3 rounded mt-4">
                        <p className="font-semibold">Output:</p>
                        <p className="text-sm">Token matrix of size (batch_size, 512), with each row representing a complete text block. </p>
                      </div>
                    </div>
                  }
                >
                  <div className="flex items-center hover:bg-blue-100 p-2 rounded-lg transition-colors">
                    <span className="text-blue-600 mr-2">1.</span>
                    Text Preprocessing and Blocking
                  </div>
                </Tooltip>

                <Tooltip
                  content={
                    <div className="max-w-md">
                      <p className="text-lg font-semibold mb-3">Dynamic Context Prediction Process:</p>
                      <div className="bg-gray-100 p-3 rounded mb-4">
                        <p className="font-semibold">Input:</p>
                        <p className="text-sm">Token matrix (batch_size, 512)</p>
                      </div>
                      <div className="mb-4">
                        <p className="font-semibold">Processing Steps Description:</p>
                        <ol className="list-decimal pl-4 space-y-2">
                          <li>
                            <p className="font-medium">Sequence Prediction:</p>
                            <p className="text-sm">For each position, the model predicts the next token based on the previous tokens. Using past_key_values to cache the attention computation results for acceleration.</p>
                            <pre className="text-xs bg-gray-50 p-2 mt-1">
                              logits, past = model(tokens[:, token_index], past)
                            </pre>
                            <div className="mt-1 text-xs text-gray-600 pl-2">
                              <p>• logits: Model's prediction probability distribution for all possible tokens</p>
                              <p>• past: Cached attention computation results, used for accelerating subsequent predictions</p>
                              <p>• token_index: Current position of the token being processed</p>
                            </div>
                          </li>
                          <li>
                            <p className="font-medium">Probability Sorting:</p>
                            <p className="text-sm">Sort the model's predictions for each position from high to low probability to prepare for ranking calculations.</p>
                            <pre className="text-xs bg-gray-50 p-2 mt-1">
                              logits, sorted_tokens = torch.sort(logits, descending=True)
                            </pre>
                            <div className="mt-1 text-xs text-gray-600 pl-2">
                              <p>• sorted_tokens: List of token IDs sorted by predicted probability from high to low</p>
                              <p>• descending=True: Indicates descending order, with the most likely token at the front</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                      <div className="bg-gray-100 p-3 rounded mt-4">
                        <p className="font-semibold">Output:</p>
                        <p className="text-sm">Probability distribution of tokens at each position (sorted)</p>
                      </div>
                    </div>
                  }
                >
                  <div className="flex items-center hover:bg-blue-100 p-2 rounded-lg transition-colors">
                    <span className="text-blue-600 mr-2">2.</span>
                    Dynamic Context Prediction
                  </div>
                </Tooltip>

                <Tooltip
                  content={
                    <div className="max-w-md">
                      <p className="text-lg font-semibold mb-3">Rank Calculation and Collection Process:</p>
                      <div className="bg-gray-100 p-3 rounded mb-4">
                        <p className="font-semibold">Input:</p>
                        <p className="text-sm">Sorted probability distribution of predicted tokens</p>
                      </div>
                      <div className="mb-4">
                        <p className="font-semibold">Processing Steps Description:</p>
                        <ol className="list-decimal pl-4 space-y-2">
                          <li>
                            <p className="font-medium">Rank Determination:</p>
                            <p className="text-sm">Find the position of the actual token in the sorted prediction list, which is the rank.</p>
                            <pre className="text-xs bg-gray-50 p-2 mt-1">
                              scores = (sorted_tokens==next_tokens).nonzero()[1]
                            </pre>
                            <div className="mt-1 text-xs text-gray-600 pl-2">
                              <p>• next_tokens: Actual next token</p>
                              <p>• nonzero()[1]: Get the index of non-zero elements, i.e., the position of the actual token in the sorted list</p>
                              <p>• scores: Rank obtained</p>
                            </div>
                          </li>
                          <li>
                            <p className="font-medium">Rank Collection:</p>
                            <pre className="text-xs bg-gray-50 p-2 mt-1">
                              ranks.extend(scores.cpu().tolist())
                            </pre>
                            <div className="mt-1 text-xs text-gray-600 pl-2">
                              <p>• ranks: List of all token ranks</p>
                              <p>• cpu(): Move data from GPU to CPU</p>
                              <p>• tolist(): Convert to Python list format</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                      <div className="bg-gray-100 p-3 rounded mt-4">
                        <p className="font-semibold">Output:</p>
                        <p className="text-sm">Sequence of integer ranks, with each number representing the predicted rank of the token at that position</p>
                      </div>
                    </div>
                  }
                >
                  <div className="flex items-center hover:bg-blue-100 p-2 rounded-lg transition-colors">
                    <span className="text-blue-600 mr-2">3.</span>
                    Rank Calculation and Collection
                  </div>
                </Tooltip>

                <Tooltip
                  content={
                    <div className="max-w-md">
                      <p className="text-lg font-semibold mb-3">BZ2 Secondary Compression Process:</p>
                      <div className="bg-gray-100 p-3 rounded mb-4">
                        <p className="font-semibold">Input:</p>
                        <p className="text-sm">Sequence of integer ranks</p>
                      </div>
                      <div className="mb-4">
                        <p className="font-semibold">Processing Steps Description:</p>
                        <ol className="list-decimal pl-4 space-y-2">
                          <li>
                            <p className="font-medium">Data Conversion:</p>
                            <pre className="text-xs bg-gray-50 p-2 mt-1">
                              tensor_bytes = tensor.numpy().tobytes()
                            </pre>
                            <div className="mt-1 text-xs text-gray-600 pl-2">
                              <p>• tensor: PyTorch tensor containing rank data</p>
                              <p>• numpy(): Convert to NumPy array format</p>
                              <p>• tobytes(): Convert to byte sequence</p>
                            </div>
                          </li>
                          <li>
                            <p className="font-medium">BZ2 Compression:</p>
                            <pre className="text-xs bg-gray-50 p-2 mt-1">
                              compressed_bytes = bz2.compress(tensor_bytes)
                            </pre>
                            <div className="mt-1 text-xs text-gray-600 pl-2">
                              <p>• bz2.compress: BZ2 compression algorithm</p>
                              <p>• compressed_bytes: Final compressed byte sequence</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                      <div className="bg-gray-100 p-3 rounded mt-4">
                        <p className="font-semibold">Output:</p>
                        <p className="text-sm">Final compressed file (.gpz), containing all necessary information for subsequent decompression</p>
                      </div>
                    </div>
                  }
                >
                  <div className="flex items-center hover:bg-blue-100 p-2 rounded-lg transition-colors">
                    <span className="text-blue-600 mr-2">4.</span>
                    BZ2 Secondary Compression Optimization
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Memory and Speed Optimization</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold">Memory Optimization:</h4>
              <ul className="space-y-2">
                <li>• 4-bit Model Quantization</li>
                <li>• Gradient Checkpoint</li>
                <li>• Efficient KV Cache</li>
                <li>• Dynamic Memory Management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Speed Optimization:</h4>
              <ul className="space-y-2">
                <li>• Batch Processing Mechanism</li>
                <li> GPU Parallel Computing</li>
                <li>• Dynamic Context</li>
                <li>• Automatic Cache Clearing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Compression Comparison Slide
    <div key="compression-comparison" className="flex flex-col h-screen bg-white p-8 page-break">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">Comparison of Compression Principles</h2>
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* LLMZip part */}
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-red-600">LLMZip: Fixed Window Scheme</h3>
          <div className="space-y-4">
            <Tooltip
              content={
                <div className="max-w-md">
                  <p className="text-lg font-semibold mb-2">Fixed Window Example:</p>
                  <pre className="text-xs bg-gray-50 p-2 mb-2">
{`Input: "The quick brown fox jumps"
Window Size: 512 tokens

Step 1: [The quick ... (512 tokens)] -> Predict next
Step 2: [quick ... (512 tokens)] -> Predict next
...`}
                  </pre>
                  <p className="text-sm">Every prediction requires processing the complete 512 token context</p>
                </div>
              }
            >
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2">Fixed Sliding Window Mechanism</h4>
                <ul className="text-sm space-y-2">
                  <li>• Each token prediction uses a fixed 512 token context</li>
                  <li>• Window size remains constant, sliding one token at a time</li>
                  <li>• Large computational load, with a lot of repeated calculations</li>
                </ul>
              </div>
            </Tooltip>

            <Tooltip
              content={
                <div className="max-w-md">
                  <p className="text-lg font-semibold mb-2">Serial Processing Limitation:</p>
                  <div className="bg-gray-100 p-3 rounded">
                    <p className="text-sm mb-2">Due to fixed window design:</p>
                    <ul className="list-disc pl-4 text-sm">
                      <li>Every prediction depends on the results of the previous 512 tokens</li>
                      <li>Cannot achieve true parallel processing</li>
                      <li>Low utilization of GPU resources</li>
                    </ul>
                  </div>
                </div>
              }
            >
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2">Efficiency Issues</h4>
                <ul className="text-sm space-y-2">
                  <li>• Strict serial processing, cannot be parallelized</li>
                  <li>• Low utilization of GPU</li>
                  <li>• 10MB text requires 9.5 days of processing</li>
                </ul>
              </div>
            </Tooltip>
          </div>
        </div>

        {/* FineZip part */}
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-green-600">FineZip: Dynamic Window Scheme</h3>
          <div className="space-y-4">
            <Tooltip
              content={
                <div className="max-w-md">
                  <p className="text-lg font-semibold mb-2">Dynamic Window Example:</p>
                  <pre className="text-xs bg-gray-50 p-2 mb-2">
{`Processing within a 512-sized block:
token_1: [] -> Predict (no context)
token_2: [token_1] -> Predict (1 context)
token_3: [token_1, token_2] -> Predict (2 contexts)
...
token_512: [token_1...token_511] -> Predict`}
                  </pre>
                  <p className="text-sm">Context length grows dynamically, avoiding redundant calculations</p>
                </div>
              }
            >
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2">Dynamic Context Design</h4>
                <ul className="text-sm space-y-2">
                  <li>• Tokens within blocks use dynamic context length</li>
                  <li>• Significantly reduces computational load</li>
                  <li>• Supports block-level parallel processing</li>
                </ul>
              </div>
            </Tooltip>

            <Tooltip
              content={
                <div className="max-w-md">
                  <p className="text-lg font-semibold mb-2">Parallel Processing Mechanism:</p>
                  <pre className="text-xs bg-gray-50 p-2 mb-2">
{`Batch Processing Example (using 4-bit quantization):
- Text split into multiple 512 token blocks
- Process 70 blocks at a time
- Use dynamic context within each block
- Multiple GPU cores compute in parallel`}
                  </pre>
                  <p className="text-sm">True parallel computation achieved through batch processing</p>
                </div>
              }
            >
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2">Efficient Parallel Processing</h4>
                <ul className="text-sm space-y-2">
                  <li>• Supports large-scale batch processing</li>
                  <li>• Significantly improves GPU utilization</li>
                  <li>• 10MB text takes about 4 hours</li>
                </ul>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Principle of 54x Speed Improvement</h3>
        <div className="grid grid-cols-3 gap-6">
          <Tooltip
            content={
              <div className="max-w-md">
                <p className="text-lg font-semibold mb-2">Detailed Calculation Optimization:</p>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Dynamic context reduces about 50% of computational load</li>
                  <li>Batch processing improves GPU utilization to 95%</li>
                  <li>4-bit quantization expands parallel scale by 4.4x</li>
                </ul>
              </div>
            }
          >
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2">Improved Computational Efficiency</h4>
              <ul className="text-sm space-y-1">
                <li>• Dynamic context reduces computational load</li>
                <li>• Batch processing improves GPU utilization</li>
                <li>• Quantization expands parallel scale</li>
              </ul>
            </div>
          </Tooltip>

          <Tooltip
            content={
              <div className="max-w-md">
                <p className="text-lg font-semibold mb-2">Detailed Memory Optimization:</p>
                <ul className="list-disc pl-4 space-y-2">
                  <li>4-bit quantization saves 75% of GPU memory</li>
                  <li>Dynamic context reduces 50% of cache requirements</li>
                  <li>Efficient cache management reduces 30% of memory usage</li>
                </ul>
              </div>
            }
          >
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2">Memory Optimization</h4>
              <ul className="text-sm space-y-1">
                <li> 4-bit quantization reduces 75% of GPU memory</li>
                <li>• Dynamic release of GPU memory</li>
                <li>• Efficient KV cache management</li>
              </ul>
            </div>
          </Tooltip>

          <Tooltip
            content={
              <div className="max-w-md">
                <p className="text-lg font-semibold mb-2">Performance Comparison:</p>
                <table className="w-full text-sm">
                  <tr>
                    <td className="border p-1">LLMZip Processing Time</td>
                    <td className="border p-1">13,651 minutes</td>
                  </tr>
                  <tr>
                    <td className="border p-1">FineZip Processing Time</td>
                    <td className="border p-1">250 minutes</td>
                  </tr>
                  <tr>
                    <td className="border p-1">Compression Ratio Difference</td>
                    <td className="border p-1">Only 1%</td>
                  </tr>
                </table>
              </div>
            }
          >
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2">Final Effect</h4>
              <ul className="text-sm space-y-1">
                <li>• Speed improved by 54x</li>
                <li>• Compression ratio only reduced by 1%</li>
                <li>• Supports larger scale processing</li>
              </ul>
            </div>
          </Tooltip>
        </div>
      </div>
    </div>,

    // Window Comparison Slide
    <div key="window-comparison" className="flex flex-col h-screen bg-white p-8 page-break">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">Comparison of Window Mechanisms</h2>
      
      <div className="mb-6 bg-blue-50 p-4 rounded-lg">
        <p className="text-lg">
          Through dynamic demonstration, the difference in working principles between LLMZip's fixed window and FineZip's dynamic window is visually presented:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>LLMZip always uses a fixed sliding window of a fixed size, leading to a lot of repeated calculations</li>
          <li>FineZip uses a dynamic context window that grows, significantly improving computational efficiency</li>
        </ul>
      </div>

      <div className="flex-grow flex items-center justify-center">
        <WindowComparison />
      </div>
    </div>,

    // Technical Details Slide
    <div key="technical" className="flex flex-col h-screen bg-white p-8 page-break">
      <h2 className="text-3xl font-bold mb-8 text-blue-800">Technical Implementation Details</h2>
      <div className="grid grid-cols-2 gap-8 flex-grow">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Configuration for Online Memory</h3>
          <div className="bg-white p-4 rounded shadow-inner">
            <pre className="text-sm">
              {`# Quantization Configuration
quant_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_compute_dtype=torch.float16,
    bnb_4bit_use_double_quant=True,
    bnb_4bit_quant_type="nf4"
)

# LoRA Configuration
lora_config = LoraConfig(
    r=8,
    lora_alpha=32,
    lora_dropout=0.05,
    task_type="CAUSAL_LM"
)`}</pre>
          </div>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Compression Processing Flow</h3>
          <div className="bg-white p-4 rounded shadow-inner">
            <pre className="text-sm">
              {`# Batch Compression
for i in range(batches):
    cur_tokens = tokens[i*BATCH_SIZE:(i+1)*BATCH_SIZE]
    past = None
    
    for j in range(cur_tokens.shape[1]-1):
        # Get logits and past_key_values
        logits, past = get_logits(
            cur_tokens, j, past
        )
        # Calculate token ranks
        scores, past = encode_one_batch(
            cur_tokens, j, past
        )`}</pre>
          </div>
        </div>
      </div>
    </div>,

    // Results Slide
    <div key="results" className="flex flex-col h-screen bg-white p-8 page-break">
      <h2 className="text-3xl font-bold mb-8 text-blue-800">Comparison of Compression Efficiency</h2>
      <div className="grid grid-cols-2 gap-8 flex-grow">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Compression Efficiency Comparison</h3>
          <table className="w-full">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-2">Method</th>
                <th className="p-2">Compression Ratio</th>
                <th className="p-2">Processing Time (10MB)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Traditional method (PPM)</td>
                <td className="p-2">0.250</td>
                <td className="p-2">1 minute</td>
              </tr>
              <tr>
                <td className="p-2">FineZip-4bit</td>
                <td className="p-2">0.145</td>
                <td className="p-2">67 minutes</td>
              </tr>
              <tr>
                <td className="p-2">FineZip</td>
                <td className="p-2">0.128</td>
                <td className="p-2">250 minutes</td>
              </tr>
              <tr>
                <td className="p-2">LLMZip</td>
                <td className="p-2">0.116</td>
                <td className="p-2">13,651 minutes</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Key Findings</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <ChevronRight className="text-blue-600 mr-2" />
              Compression ratio better than traditional method by about 50%
            </li>
            <li className="flex items-center">
              <ChevronRight className="text-blue-600 mr-2" />
              Processing speed improved by 54x (vs LLMZip)
            </li>
            <li className="flex items-center">
              <ChevronRight className="text-blue-600 mr-2" />
              Supports stable compression of 1-100MB files
            </li>
            <li className="flex items-center">
              <ChevronRight className="text-blue-600 mr-2" />
              4-bit quantization only loses about 13% performance
            </li>
          </ul>
        </div>
      </div>
    </div>,

    // Reproduction Analysis Slide
    <div key="reproduction" className="flex flex-col h-screen bg-white p-8 page-break">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">Replication Analysis</h2>
      <div className="flex-1 grid grid-cols-2 gap-6 overflow-hidden">
        <div className="flex flex-col space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg flex-1">
            <h3 className="text-xl font-semibold mb-4">Distribution of Batch Processing Time</h3>
            <div className="relative h-64">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-600 h-4 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <span className="ml-2">Average Processing Time: 45.2 seconds/batch</span>
                </div>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-green-600 h-4 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  <span className="ml-2">Longest Processing Time: 81.4 seconds (batch 544)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-yellow-600 h-4 rounded-full" style={{width: '50%'}}></div>
                  </div>
                  <span className="ml-2">Shortest Processing Time: 37.5 seconds (batch 671)</span>
                </div>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <p>• Total number of batches: 671</p>
              <p>• Batch size: 16 tokens</p>
              <p>• Total processing time: 30703.81 seconds (about 8.5 hours)</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg flex-1">
            <h3 className="text-xl font-semibold mb-4">Compression Performance Indicators</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Change in File Size</h4>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="text-sm text-gray-600">Original size</div>
                    <div className="text-lg font-bold">10.44 MB</div>
                  </div>
                  <ChevronRight className="text-blue-600" />
                  <div className="flex-1">
                    <div className="text-sm text-gray-600">Compressed size</div>
                    <div className="text-lg font-bold">2.09 MB</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Key Indicators</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="text-sm text-gray-600">Compression ratio</div>
                    <div className="text-xl font-bold text-blue-600">0.1998</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="text-sm text-gray-600">Processing speed</div>
                    <div className="text-xl font-bold text-green-600">45.2 seconds/batch</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Comparison with Paper</h4>
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-2">Indicator</th>
                      <th className="p-2">Paper Results</th>
                      <th className="p-2">Replication Results</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border">Compression ratio</td>
                      <td className="p-2 border">0.128</td>
                      <td className="p-2 border">0.1998</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Processing time</td>
                      <td className="p-2 border">250 minutes</td>
                      <td className="p-2 border">512 minutes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Batch Trend Slide
    <div key="batch-trend" className="flex flex-col h-screen bg-white p-8 page-break">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">Analysis of Trends in Batch Processing Time</h2>
      <div className="flex-1 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-6">Trend of Processing Time Changes</h3>
        <div className="h-[60vh]">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 flex items-end">
              <div className="w-full h-full flex items-end justify-between">
                {[...Array(10)].map((_, i) => (
                  <div 
                    key={i}
                    className="bg-blue-500 w-8"
                    style={{
                      height: `${30 + Math.random() * 50}%`,
                      opacity: 0.7 + (i / 20)
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 w-full h-px bg-gray-300"></div>
            <div className="absolute left-0 h-full w-px bg-gray-300"></div>
          </div>
        </div>
        <div className="mt-6 space-y-2 text-sm text-gray-600">
          <p>• Processing time shows a fluctuating trend but generally remains stable</p>
          <p>• Minor performance fluctuations occur in the middle period, possibly related to GPU memory management</p>
          <p>• Processing speed slightly improves at the end, possibly due to smaller batch size</p>
        </div>
      </div>
    </div>,

    // Experiment Analysis Slide
    <div key="experiment-analysis" className="flex flex-col h-screen bg-white p-8 page-break">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">In-depth Analysis of Experimental Results</h2>
      <div className="flex-1">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Analysis of Rank Distribution Features</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Distribution within 0-15 Range</h4>
              <div className="flex items-center">
                <div className="w-full bg-blue-200 rounded-full h-4">
                  <div className="bg-blue-600 h-4 rounded-full" style={{width: '65%'}}></div>
                </div>
                <span className="ml-2">65.3%</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Most tokens are predicted within the top 15 ranks, indicating that the model has a strong understanding of text</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Proportion of Rank=0</h4>
              <div className="flex items-center">
                <div className="w-full bg-green-200 rounded-full h-4">
                  <div className="bg-green-600 h-4 rounded-full" style={{width: '40%'}}></div>
                </div>
                <span className="ml-2">38.7%</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Nearly 40% of tokens are accurately predicted, showing the model's excellent memory capabilities</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Characteristics of Long-tailed Distribution</h4>
              <p className="text-sm text-gray-600">
                • Rank values show typical long-tailed distribution
                <br/>
                • 99% of predictions have Rank less than 20000
                <br/>
                • Maximum Rank is approximately 120000
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Analysis of Distribution Features</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• High concentration in low Rank region (0-15) indicates strong contextual understanding ability of the model</p>
                <p>• High proportion of Rank=0 reflects accurate capture of common patterns in the model</p>
                <p>• Long-tailed distribution shows that the model still has room for improvement in predicting rare tokens</p>
                <p>• Overall distribution characteristics are highly correlated with the prediction ability of language models</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Image Compression Slide
    <div key="image-compression" className="flex flex-col h-screen bg-white p-8 page-break">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">Attempts at Image Compression Extension</h2>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Scheme 1: Base64 Encoding Method</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-blue-600">→</span>
              <span>Image</span>
              <span className="text-blue-600">→</span>
              <span>Base64 String</span>
              <span className="text-blue-600">→</span>
              <span>LLM Tokens</span>
              <span className="text-blue-600">→</span>
              <span>Compression</span>
            </div>
            
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Issues:</h4>
              <ul className="list-disc pl-4 space-y-2 text-sm">
                <li>Base64 string is too long, exceeding the context limit of the model</li>
                <li>LLM has limited understanding of Base64 format</li>
                <li>Easy to generate invalid characters leading to decoding failure</li>
                <li>Compression successful but unable to correctly decompress and restore</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Scheme 2: Pixel Block Encoding Method</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-green-600">→</span>
              <span>Image</span>
              <span className="text-green-600">→</span>
              <span>Pixel Block</span>
              <span className="text-green-600">→</span>
              <span>Numerical Sequence</span>
              <span className="text-green-600">→</span>
              <span>LLM Tokens</span>
              <span className="text-green-600">→</span>
              <span>Compression</span>
            </div>

            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Processing Flow:</h4>
              <ol className="list-decimal pl-4 space-y-2 text-sm">
                <li>Split the image into 8x8 pixel blocks</li>
                <li>Convert the RGB values of each pixel block into a string</li>
                <li>Use delimiters to connect pixel values and blocks</li>
                <li>Convert to tokens that LLaM can process</li>
                <li>Use dynamic context for compression</li>
              </ol>
            </div>

            <div className="bg-white p-4 rounded mt-4">
              <h4 className="font-medium mb-2">Batch Processing Structure:</h4>
              <div className="text-sm space-y-1">
                <p>• 3 large blocks</p>
                <p className="pl-4">└── Each block has 64 batches</p>
                <p className="pl-8">└── Each batch has 4 sequences (batch_size=4)</p>
                <p className="pl-8">└── Each sequence has 511 tokens</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Image Compression Results Slide - Optimized Layout
    <div key="image-compression-results" className="flex flex-col h-screen bg-white p-8 page-break">
      <h2 className="text-3xl font-bold mb-4 text-blue-800">Analysis of Experimental Results for Pixel Block Encoding</h2>
      
      <div className="grid grid-cols-3 gap-6 flex-grow">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Experimental Setup</h3>
          <div className="bg-white p-3 rounded">
            <h4 className="font-medium mb-2 text-sm">Model and Data Configuration:</h4>
            <ul className="list-disc pl-4 space-y-1 text-sm">
              <li>LLaMA 3.1 8B (4-bit quantization)</li>
              <li>Context window: 512 tokens</li>
              <li>Batch size: 4</li>
              <li>8x8 pixel blocks</li>
              <li>Test image: 3,057 bytes</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Experimental Results</h3>
          <div className="bg-white p-3 rounded">
            <h4 className="font-medium mb-2 text-sm">Performance Indicators:</h4>
            <ul className="list-disc pl-4 space-y-1 text-sm">
              <li>Compressed: 11,174 bytes</li>
              <li className="text-red-600">Compression ratio: 1:3.66 (expansion)</li>
              <li>Processing time: 2.16 hours</li>
              <li>Significant reduction in memory usage</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Optimization Directions</h3>
          <div className="bg-white p-3 rounded">
            <h4 className="font-medium mb-2 text-sm">Main Issues and Improvements:</h4>
            <ul className="list-disc pl-4 space-y-1 text-sm">
              <li>Exploring more compact pixel encoding</li>
              <li>Optimizing delimiter strategy</li>
              <li>Increasing batch processing scale</li>
              <li>Introducing pre-compression steps</li>
            </ul>
          </div>
        </div>
      </div>
    </div>,

    // Improvement Analysis Slide
    <div key="improvement-analysis" className="flex flex-col h-screen bg-white p-8 page-break">
      <h2 className="text-3xl font-bold mb-4 text-blue-800">Detailed Analysis of Improvement Schemes</h2>
      
      <div className="grid grid-cols-3 gap-6 flex-grow">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Bitwise Encoding + Group Storage</h3>
          <div className="bg-white p-3 rounded">
            <h4 className="font-medium mb-2 text-sm">Explanation:</h4>
            <div className="text-sm space-y-2">
              <p>Compress RGB values into a single integer:</p>
              <div className="bg-gray-100 p-2 rounded text-xs">
                {"Pixel (255,0,0) → 16711680"}
                <br/>
                {"Bitwise operation: R left shift 16 bits | G left shift 8 bits | B"}
              </div>
              <p className="mt-2">Group Example (2×2 image):</p>
              <div className="bg-gray-100 p-2 rounded text-xs">
                1: [16711680, 65280]
                <br/>
                2: [255, 16776960]
              </div>
              <p className="text-green-600 mt-2">Expected effect: Data volume reduced by 60-70%</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Two-dimensional Grouping</h3>
          <div className="bg-white p-3 rounded">
            <h4 className="font-medium mb-2 text-sm">Processing Flow:</h4>
            <div className="text-sm space-y-2">
              <p>Example of 4×4 image grouping:</p>
              <div className="bg-gray-100 p-2 rounded text-xs">
                1: [P1 P2]  2: [P3 P4]
                      [P5 P6]         [P7 P8]
                <br/>
                3: [P9 P10] 4: [P11 P12]
                      [P13 P14]       [P15 P16]
              </div>
              <p className="mt-2">Attention range of windows:</p>
              <ul className="list-disc pl-4 text-xs">
                <li>Window 2 looks at window 1</li>
                <li>Window 3 looks at windows 1,2</li>
                <li>Window 4 looks at windows 1,2,3</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Parallel Processing Across Channels</h3>
          <div className="bg-white p-3 rounded">
            <h4 className="font-medium mb-2 text-sm">Optimization Strategy:</h4>
            <div className="text-sm space-y-2">
              <p>Separate channel processing:</p>
              <div className="bg-gray-100 p-2 rounded text-xs">
                1. R channel: [255, 0, 255, 0]
                <br/>
                2. G channel: [0, 255, 0, 255]
                <br/>
                3. B channel: [0, 0, 0, 0]
              </div>
              <p className="mt-2">Performance improvement:</p>
              <ul className="list-disc pl-4 text-xs">
                <li>Computational load reduced to 1/3 of the original</li>
                <li>Improved GPU utilization</li>
                <li>Optimized memory usage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Overall Effect Estimation</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-3 rounded">
            <h4 className="font-medium mb-2 text-sm">Data Volume Optimization</h4>
            <ul className="list-disc pl-4 text-xs">
              <li>Bitwise encoding: Reduces by 70%</li>
              <li>Spatial grouping: Reduces redundancy by 20%</li>
              <li>Channel processing: Optimizes by 15%</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded">
            <h4 className="font-medium mb-2 text-sm">Improved Processing Speed</h4>
            <ul className="list-disc pl-4 text-xs">
              <li>Parallel processing: Increases by 3-4 times</li>
              <li>Memory optimization: Reduces by 50%</li>
              <li>GPU utilization: Increases to 95%</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded">
            <h4 className="font-medium mb-2 text-sm">Implementation Difficulty</h4>
            <ul className="list-disc pl-4 text-xs">
              <li>Bitwise encoding: Easy</li>
              <li>Spatial grouping: Medium</li>
              <li>Channel processing: Difficult</li>
            </ul>
          </div>
        </div>
      </div>
    </div>,

    // Conclusion Slide
    <div key="conclusion" className="flex flex-col h-screen bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 page-break">
      <h2 className="text-3xl font-bold mb-8">Summary and Outlook</h2>
      <div className="grid grid-cols-2 gap-8 flex-grow">
        <div className="bg-white bg-opacity-10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Main Contributions</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <ChevronRight className="mr-2" />
              First practical LLM compression system
            </li>
            <li className="flex items-center">
              <ChevronRight className="mr-2" />
              Multiple technological innovations and optimizations
            </li>
            <li className="flex items-center">
              <ChevronRight className="mr-2" />
              Significantly improves compression performance
            </li>
            <li className="flex items-center">
              <ChevronRight className="mr-2" />
              Verify the feasibility of LLM compression
            </li>
          </ul>
        </div>
        <div className="bg-white bg-opacity-10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Future Directions</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <ChevronRight className="mr-2" />
              Further optimize processing speed
            </li>
            <li className="flex items-center">
              <ChevronRight className="mr-2" />
              Further improve compression ratio
            </li>
            <li className="flex items-center">
              <ChevronRight className="mr-2" />
              Expand application scenarios
            </li>
            <li className="flex items-center">
              <ChevronRight className="mr-2" />
              Reduce computational resource requirements
            </li>
          </ul>
        </div>
      </div>
    </div>
  ];

  if (!isClient) {
    return null;
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <style jsx global>{`
        @media print {
          .page-break {
            page-break-after: always;
            height: 100vh;
            margin: 0;
            padding: 2rem;
            box-sizing: border-box;
          }
          @page {
            size: landscape;
            margin: 0;
          }
        }
      `}</style>
      <div className="w-full">
        {slides}
      </div>
      <button 
        onClick={handlePrint}
        className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
      >
        Export PDF
      </button>
    </>
  );
};

export default Presentation;